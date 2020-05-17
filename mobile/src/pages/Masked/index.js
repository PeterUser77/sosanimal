import { Form } from '@unform/mobile';
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Input from '../../components/Form/Input';
import global from '../../global';
import { styles,StyleSheet} from 'react-native';
import { mask, unMask } from 'remask';


export default function Case() {

  const formAuth = useRef(null);
  function handleSubmit(data) {
    console.log(data);
  };

  // AQUI ESTOU CRIANDO A MASCARA DE CPF 
  const [valueCPF, setValue] = useState("");
  const onChange = ev => {
    const originalValue = unMask(ev.target.value)
    const maskedValue = mask(originalValue,
      [
        '999.999-999-99',
        

      ]);
    setValue(maskedValue);

  };

  // FIM DOS PARAMETROS DA MASCARA DE CPF 

  // MASCARA DE TELEFONE
  const [valueFone, setValueFone] = useState("");
  const onChangeFone = ev => {
    const originalValue = unMask(ev.target.value)
    const maskedValue = mask(originalValue,
      [
        '(99) 99999-9999',
      ]);
    setValueFone(maskedValue);

  };
  //FIM DOS PARAMETROS DA MASCARA DE TELEFONE 

  // MASCARA DE CEP  
  const [valueCEP, setValueCEP] = useState("");
  const onChangeCEP = ev => {
    const originalValue = unMask(ev.target.value)
    const maskedValue = mask(originalValue,
      [
        '99.999-999',
      ]);
      setValueCEP(maskedValue);

  };
  //FIM DOS PARAMETROS DA MASCARA DE CEP

  return (

    <View style={global.containerMenu}>
      <Form ref={formAuth} onSubmit={handleSubmit}>

        <View >
          <Input
            type="text"
            placeholder="CPF"
            name="Valor"
            onChange={onChange}
            value={valueCPF}
            style={global.input}
          />
          <Input
            type="text"
            placeholder="TELEFONE"
            name="Telefone"
            onChange={onChangeFone}
            value={valueFone}
            style={global.input}
          />
            <Input
            type="text"
            placeholder="CEP"
            name="CEP"
            onChange={onChangeCEP}
            value={valueCEP}
            style={global.input}
          />

        </View>

        <View >
          <View >
            <TouchableOpacity 
     onPress={() => { formAuth.current.submitForm() }}>
              <Text > TESTAR </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Form>
    </View>

  );

}
