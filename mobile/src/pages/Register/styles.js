import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Style título "Cadastrar Usuário"
  title: {
    paddingBottom: 7,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#696969',
  },

  // Style Subtitle "Endereço"
  subtitle: {
    paddingTop: 20,
    paddingBottom: 7,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#696969',
  },

  // View com CEP e Button verificar lado a lado
  inputCep: {
    marginTop: 7,
    marginRight: 5,
    padding: 10,
    backgroundColor: '#ffff',
    fontWeight: 'bold',
    borderRadius: 10,
    width: 210,
  },

  checkButton: {
    width: 115,
    height: 50,
    backgroundColor: '#FF8C00',
    marginTop: 7,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // end view containerCepButton


  // View com Cidade e UF lado a lado
  inputCity: {
    marginTop: 5,
    marginRight: 5,
    padding: 10,
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    borderRadius: 10,
    width: 260,
  },
  inputUf: {
    marginTop: 5,
    padding: 10,
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    borderRadius: 10,
    width: 65,
  },
  // end view containerCityUf

  inputNeighborhood: {
    marginTop: 5,
    padding: 10,
    width: 330,
    height: 50,
    fontSize: 16,
    borderRadius: 10,
    fontWeight: 'bold',
    backgroundColor: '#F0F0F0'
  },


  // View com Complement e Number lado a lado
  inputComplement: {
    marginTop: 5,
    marginRight: 5,
    padding: 10,
    backgroundColor: '#ffff',
    fontWeight: 'bold',
    borderRadius: 10,
    width: 250,
  },
  inputNumber: {
    marginTop: 5,
    padding: 10,
    backgroundColor: '#ffff',
    fontWeight: 'bold',
    borderRadius: 10,
    width: 75,
  },
  // end view containerComplementNumber

  botaoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffff',
  },
});