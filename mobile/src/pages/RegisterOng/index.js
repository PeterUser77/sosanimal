import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    AsyncStorage,
    Alert
} from 'react-native';
import Input from '../../components/Form/Input';

import global from '../../global';
import styles from './styles';

import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';
import Api from '../../service/Api';
// import { validateCNPJ } from '../../utils/DocumentUtils';
// import { validatePhone } from '../../utils/PhoneUtils';



export default function RegisterOng() {

    const navigation = useNavigation();
    const formRegisterOng = useRef(null);
    const [validCep, setValidCep] = useState(false);
    const [cepTemp, setCepTemp] = useState();
    const KEY_IS_OWN_ONG = 'KEY_IS_OWN_ONG';
    const KEY_CD_USER = 'KEY_CD_USER';

    async function findByCep(cep) {

        await Api.get('address/findByCep?cep=' + cep)
            .then(res => {
                formRegisterOng.current.setFieldValue('address.city', res.data.city);
                formRegisterOng.current.setFieldValue('address.neighborhood', res.data.neighborhood);
                formRegisterOng.current.setFieldValue('address.state', res.data.state);
                formRegisterOng.current.setFieldValue('address.publicPlace', res.data.publicPlace);
                setValidCep(true);
                setCepTemp(cep);
            }).catch(err => {
                formRegisterOng.current.setFieldError('address.cep', 'CEP inválido!');
                alert(formRegisterOng.current.getFieldError('address.cep'));
            })
    }

    function validateCep(cep) {
        if (cepTemp !== cep) {
            setValidCep(false);
            alert('Erro ao cadastrar! CEP não verificado.');
        }
    }

    function validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
            throw "E-mail inválido!";
        }
    }

    function disabledButtonRegister() {
        return validCep !== true;
    }

    function navigateToHomeOng(data){
        navigation.navigate('HomeOng', data);
    }

    function styleButton() {
        if (disabledButtonRegister()) {
            return global.disabledButton;
        } else {
            return global.button;
        }
    }

    async function handleSubmit(data) {
        const cdUser = await AsyncStorage.getItem(KEY_CD_USER);

        try {
            validateCep(data.address.cep);
            validateEmail(data.email);
            // validateCNPJ(data.document);
            // validatePhone(data.phone);

            const response = await Api.put('ong/create', {
                'ong': {
                    'name': data.name,
                    'fantasyName': data.fantasyName,
                    'email': data.email,
                    'phone': data.phone,
                    'document': data.document,
                    'address': data.address},
                'cdUser':cdUser});
            
            await AsyncStorage.setItem(KEY_IS_OWN_ONG, {isOwnOng:true})

            Alert.alert("Sucesso", "Ong cadastrada com sucesso!", [
                { text: "OK", onPress: () => {}}
            ], { cancelable: false });
        
            navigateToHomeOng({'fantasyName':data.fantasyName,
                               'totalIncidents': 0});
        } catch (err) {
            if (err.response.data.message) {
                Alert.alert("Erro", err.response.data.message, [
                    { text: "OK", onPress: () => { } }
                ], { cancelable: false });
            } else {
                Alert.alert("Erro", "Ocorreu um erro ao tentar autenticar, tente novamente! Se o problema persistir contacte o administrador do sistema.", [
                    { text: "OK", onPress: () => { } }
                ], { cancelable: false });
            }
        }
    }

    return (

        <View style={global.containerStatusBar}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={global.container}>
                    <Text style={styles.title}>Cadastrar ONG</Text>
                </View>

                <Form ref={formRegisterOng} onSubmit={handleSubmit}>
                    <View style={global.container}>
                        <Input
                            style={global.input}
                            name="name"
                            placeholder="Nome"
                            autoCorrect={false}
                        />
                        <Input
                            style={global.input}
                            name="fantasyName"
                            placeholder="Nome Fantasia"
                            autoCorrect={false}
                        />
                        <Input
                            style={global.input}
                            name="email"
                            placeholder="Email"
                            autoCorrect={false}
                        />
                        <Input
                            style={global.input}
                            name="phone"
                            placeholder="Telefone"
                            keyboardType="number-pad"
                            autoCorrect={false}
                        />
                        <Input
                            style={global.input}
                            name="document"
                            placeholder="CPNPJ"
                            keyboardType="number-pad"
                            autoCorrect={false}
                        />
                    </View>

                    <View style={global.container}>
                        <Text style={styles.subtitle}>Endereço</Text>
                    </View>

                    <Scope path="address">
                        <View style={global.container}>
                            <View style={global.containerSpaceBetween}>
                                <Input
                                    style={styles.inputCep}
                                    name="cep"
                                    placeholder="CEP"
                                    keyboardType="number-pad"
                                    autoCorrect={false}
                                />
                                <TouchableOpacity
                                    style={styles.checkButton}
                                    onPress={() => { findByCep(formRegisterOng.current.getFieldValue('address.cep')) }}
                                >
                                    <Text style={global.textButton}>Verificar</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={global.containerSpaceBetween}>
                                <Input
                                    style={styles.inputCity}
                                    name="city"
                                    placeholder="Cidade"
                                    autoCorrect={false}
                                    editable={false}
                                />
                                <Input
                                    style={styles.inputUf}
                                    name="state"
                                    placeholder="UF"
                                    autoCorrect={false}
                                    editable={false}
                                />
                            </View>

                            <Input
                                style={styles.inputNeighborhood}
                                name="neighborhood"
                                placeholder="Bairro"
                                autoCorrect={false}
                                editable={false}
                            />

                            <Input
                                style={styles.inputNeighborhood}
                                name="publicPlace"
                                placeholder="Logradouro"
                                autoCorrect={false}
                                editable={false}
                            />

                            <View style={global.containerSpaceBetween}>
                                <Input
                                    style={styles.inputComplement}
                                    name="complement"
                                    placeholder="Complemento"
                                    autoCorrect={false}
                                />
                                <Input
                                    style={styles.inputNumber}
                                    name="number"
                                    keyboardType="number-pad"
                                    placeholder="Número"
                                    autoCorrect={false}
                                />
                            </View>
                        </View>
                    </Scope>

                    <TouchableOpacity
                        style={styleButton()}
                        disabled={disabledButtonRegister()}
                        onPress={() => { formRegisterOng.current.submitForm() }}
                    >
                        <Text style={global.textButton}>Cadastrar</Text>
                    </TouchableOpacity>

                </Form>
            </ScrollView>
        </View>
    );
}