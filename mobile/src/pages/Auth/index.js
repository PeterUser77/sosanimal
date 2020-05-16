import React, { useRef } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';

import {
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/Form/Input';
import { crypto } from '../../secure/Crypto';

import styles from './styles';
import global from '../../global';


export default function Auth() {

  const formAuth = useRef(null);
  const navigation = useNavigation();

  async function handleSubmit(data) {
    const password = await crypto('text');
    console.log(password);
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/background-login.jpg')} style={global.backgroundImage}>

        <View style={styles.containerForm}>
          <Form ref={formAuth} onSubmit={handleSubmit}>
            <Input
              placeholder="E-mail"
              name="email"
              type="email"
              style={global.input}
            />
            <Input
              placeholder="Senha"
              name="password"
              type="password"
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

