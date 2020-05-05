import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
} from 'react-native';
import Input from '../../components/Form/Input';

import global from '../../global';
import styles from './styles';

import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';



export default function Register() {

    const navigation = useNavigation();
    const formRegister = useRef(null);

    function navigateToRegister() {
        navigation.navigate('RegisterOng');
    }
    function handleSubmit(data) {
        console.log(data);
    }

    return (

        <View style={styles.container}>
            <ImageBackground source={require('../../assets/background-register.jpg')} style={global.backgroundImage}>

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

                        <Scope>
                            <View style={global.container}>
                                <View style={styles.containerCepButton}>
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
                                        <Text style={styles.botaoText}>Verificar</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.containerCityUf}>
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

                                <View style={styles.containerComplementNumber}>
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
                            style={styles.button}
                            onPress={() => { navigateToRegister() }}
                        >
                            <Text style={styles.botaoText}>Cadastrar</Text>
                        </TouchableOpacity>

                    </Form>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}