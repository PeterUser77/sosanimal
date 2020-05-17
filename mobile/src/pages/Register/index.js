import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Input from '../../components/Form/Input';
import Crypto from '../../secure/Crypto';
import MyDatePicker from '../../components/Form/MyDatePicker';


import global from '../../global';
import styles from './styles';

import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';

import Api from '../../service/Api';


export default function Register() {

    const navigation = useNavigation();
    const formRegister = useRef(null);
    const [validCep, setValidCep] = useState(false);
    const [cepTemp, setCepTemp] = useState();


    function navigateToAuth() {
        navigation.navigate('Auth');
    }

    async function findByCep(cep) {

        await Api.get('address/findByCep?cep=' + cep)
            .then(res => {
                formRegister.current.setFieldValue('address.city', res.data.city);
                formRegister.current.setFieldValue('address.neighborhood', res.data.neighborhood);
                formRegister.current.setFieldValue('address.state', res.data.state);
                formRegister.current.setFieldValue('address.publicPlace', res.data.publicPlace);
                setValidCep(true);
                setCepTemp(cep);
            }).catch(err => {
                formRegister.current.setFieldError('address.cep', 'CEP inválido!');
                alert(formRegister.current.getFieldError('address.cep'));
            })
    }

    function validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true);
        }
        formRegister.current.setFieldError('email', 'E-mail invalido!');
        return (false);
    }

    function validateCep(cep){
        if(cepTemp !== cep){
            setValidCep(false);
            alert('Erro ao cadastrar! CEP não verificado.');
        }
    }

    function disabledButtonRegister(){
        return validCep !== true;
    }

    async function handleSubmit(data) {

        validateEmail(data.email);
        validateCep(data.address.cep);

        const password = await Crypto(data.password);

        await Api.put('user/create',
            {
                'firstName': data.firstName,
                'lastName': data.lastName,
                'email': data.email,
                'password': password,
                'phone': data.phone,
                'document': data.document,
                'address': data.address,
                'birthDate': data.birthDate
            }).then(res => {
                alert("Usuário cadastrado com sucesso.");
                navigateToAuth();
            }).catch(err => {
                if (err.response.data.message !== null) {
                    alert(err.response.data.message);
                } else {
                    alert("Ocorreu um erro ao tentar cadastrar o usuário, tente novamente! Se o problema persistir contacte o administrador do sistema.");
                }
            });

    }

    function styleButton(){
        if(disabledButtonRegister()){
            return global.disabledButton;
        }else{
            return global.button;
        }
    }

    return (

        <View style={global.containerStatusBar}>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={global.container}>
                    <Text style={styles.title}>Cadastrar Usuário</Text>
                </View>

                <Form ref={formRegister} onSubmit={handleSubmit}>

                    <View style={global.container}>

                        <Input
                            style={global.input}
                            name="firstName"
                            placeholder="Nome"
                            autoCorrect={false}
                        />

                        <Input
                            style={global.input}
                            name="lastName"
                            placeholder="Sobrenome"
                            autoCorrect={false}
                        />

                        <MyDatePicker
                            name="birthDate"
                            placeholder="Data de Nascimento"
                        />

                        <Input
                            style={global.input}
                            name="email"
                            placeholder="Email"
                            autoCorrect={false}
                        />
                        <Input
                            style={global.input}
                            name="password"
                            placeholder="Senha"
                            autoCorrect={false}
                            secureTextEntry={true}
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
                            placeholder="CPF"
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
                                    onPress={() => { findByCep(formRegister.current.getFieldValue('address.cep')) }}
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
                        onPress={() => { formRegister.current.submitForm() }}
                    >
                        <Text style={global.textButton}>Cadastrar</Text>
                    </TouchableOpacity>

                </Form>
            </ScrollView>
        </View >
    );
}