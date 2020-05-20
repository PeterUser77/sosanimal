import React, { useRef } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from 'react-native';
import Input from '../../components/Form/Input';
import Crypto from '../../secure/Crypto';

import styles from './styles';
import global from '../../global';

import Api from '../../service/Api';


export default function Auth() {

  const formAuth = useRef(null);
  const navigation = useNavigation();
  const KEY_FIST_NAME = 'KEY_FIRST_NAME';
  const KEY_TOKEN = 'KEY_TOKEN';
  const KEY_CD_USER = 'KEY_CD_USER';

  async function validePassword(password) {
    if (password.length === 0) {
      throw "É necessário inserir a senha para autenticar!";
    }
  }

  async function navigateToHome(userName, ownOng){
    navigation.navigate('HomeUser', {userName, ownOng});
  }

  function valideEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
      throw "E-mail inválido!";
    }
  }

  async function setItemAsyncStorage(key, value){
    await AsyncStorage.setItem(key, value);
  }

  async function handleSubmit(data) {
    try {
      valideEmail(data.email);
      validePassword(data.password);
      const password = await Crypto(data.password);
      const response = await Api.post('authentication/new',
        {
          "email": data.email,
          "password": password
        });

        setItemAsyncStorage(KEY_TOKEN, response.data.token);
        setItemAsyncStorage(KEY_CD_USER, response.data.cdUser);
        navigateToHome(response.data.firstName, response.data.ownOng);

    } catch (err) {
      console.log(err);
      if (err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert("Ocorreu um erro ao tentar autenticar, tente novamente! Se o problema persistir contacte o administrador do sistema.");
      }
    }
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/background-login.jpg')} style={global.backgroundImage}>

        <View style={styles.containerForm}>
          <Form ref={formAuth} onSubmit={handleSubmit}>
            <Input
              placeholder="E-mail"
              name="email"
              style={global.input}
            />
            <Input
              placeholder="Senha"
              name="password"
              style={global.input}
              secureTextEntry={true}
              password={true}
            />

            <TouchableOpacity
              style={global.button}
              onPress={() => { formAuth.current.submitForm() }}>
              <Text style={global.textButton}> Entrar </Text>
            </TouchableOpacity>
          </Form>
        </View>

      </ImageBackground>
    </View>
  );

}

