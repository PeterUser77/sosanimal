import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Alert,  Text,  View,  Image,  TextInput,  TouchableOpacity} from 'react-native'
import styles from './styles';
export default function Auth() {

  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('Register');
  }

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.LogoView}>
        <Image
          source={require('../../../assets/icon.png')}
          style={styles.logo}

        />
      </View>
      <TextInput style={styles.input}
        placeholder="Digite seu email"
        autoCorrect={false}
      />
      <TextInput style={styles.input}
        secureTextEntry={true}
        autoCorrect={false}
        placeholder="Digite sua senha"
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigateToHome()}
      >
        <Text style={styles.botaoText}> Login </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigateToRegister()}>
        <Text style={styles.botaoText}> Registrar </Text>
      </TouchableOpacity>

    </View>
  );

}

