import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import  Constants  from 'expo-constants';


export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5ECE8',
    paddingTop: Constants.statusBarHeight + 20,
  },

  title: {
    paddingBottom: 7,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#696969',
  },
  subtitle: {
    paddingTop: 20,
    paddingBottom: 7,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#696969',
  },
  input: {
    marginTop: 7,
    padding: 10,
    width: 300,
    height: 40,
    backgroundColor: '#ffff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3
  },

  formEndereco: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputUf: {
    marginTop: 12,
    padding: 10,
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    borderRadius: 3,
    width: 45
  },

  inputCidade: {
    marginTop: 7,
    padding: 10,
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    borderRadius: 3,
    width: 247,
  },
  inputBairro: {
    marginTop: 7,
    padding: 10,
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    borderRadius: 3,
    width: 300,
  },
  inputCep: {
    marginTop: 7,
    padding: 10,
    backgroundColor: '#ffff',
    fontWeight: 'bold',
    borderRadius: 3,
    width: 197,
  },

  botaoVerificar: {
    width: 95,
    height: 50,
    backgroundColor: '#FF4500',
    marginTop: 7,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputComplemento: {
    marginTop: 7,
    padding: 10,
    backgroundColor: '#ffff',
    fontWeight: 'bold',
    borderRadius: 3,
    width: 197,
  },
  inputNumero: {
    marginTop: 7,
    padding: 10,
    backgroundColor: '#ffff',
    fontWeight: 'bold',
    borderRadius: 3,
    width: 95,
  },
  botao: {
    width: 300,
    height: 50,
    backgroundColor: '#FF4500',
    marginTop: 7,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center'

  },
  botaoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffff',
  },
});

