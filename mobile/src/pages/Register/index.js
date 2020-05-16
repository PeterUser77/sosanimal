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

    async function handleSubmit(data) {

        console.log(data.password);
        const password = await Crypto(data.password);

        //VALIDAÇÕES ----------

        //ENVIAR BACKEND ------
        const response = await api.post('incidents', {
            params: {page}
        });

        console.log({
            'firstName': data.firstNamem,
            'lastName': data.lastName,
            'email': data.email,
            'password': password,
            'phone': data.phone,
            'document': data.document,
            'address': data.address,
            'date': data.birthDate
        });
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
                            placeholder= "Data de Nascimento"
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
                                    onPress={() => { }}
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
                                    name="uf"
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
                        style={global.button}
                        onPress={() => { formRegister.current.submitForm() }}
                    >
                        <Text style={global.textButton}>Cadastrar</Text>
                    </TouchableOpacity>

                </Form>
            </ScrollView>
        </View >
    );
}