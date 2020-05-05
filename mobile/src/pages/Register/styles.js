import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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


  // View com Cidade e UF lado a lado
  containerCityUf: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputUf: {
    marginTop: 7,
    padding: 10,
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    borderRadius: 10,
    width: '15%'
  },
  inputCity: {
    marginTop: 7,
    padding: 10,
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    borderRadius: 3,
    width: 247,
  },
  // end view containerCityUf

  // View com CEP e Button verificar lado a lado
  containerCepButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  inputCep: {
    marginTop: 7,
    padding: 10,
    backgroundColor: '#ffff',
    fontWeight: 'bold',
    borderRadius: 10,
    width: 230,
  },

  checkButton: {
    width: 100,
    height: 50,
    backgroundColor: '#FF4500',
    marginTop: 7,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // end view containerCepButton


  // View com Complement e Number lado a lado
  containerComplementNumber: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputNeighborhood: {
    marginTop: 7,
    padding: 10,
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    borderRadius: 10,
    width: 300,
  },


  inputComplement: {
    marginTop: 7,
    padding: 10,
    backgroundColor: '#ffff',
    fontWeight: 'bold',
    borderRadius: 10,
    width: 197,
  },
  inputNumber: {
    marginTop: 7,
    padding: 10,
    backgroundColor: '#ffff',
    fontWeight: 'bold',
    borderRadius: 10,
    width: 95,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#FF4500',
    marginTop: 7,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'

  },
  botaoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffff',
  },
});