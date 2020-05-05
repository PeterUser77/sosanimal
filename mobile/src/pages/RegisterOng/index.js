import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';
import styles from './styles';


export default function Register() {


    return (

        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Cadastrar ONG</Text>

                <Form>
                    <TextInput style={styles.input}
                        placeholder="Nome"
                        autoCorrect={false}
                    />
                    <TextInput style={styles.input}
                        placeholder="Nome Fantasia"
                        autoCorrect={false}
                    />
                    <TextInput style={styles.input}
                        placeholder="Email"
                        autoCorrect={false}
                    />
                    <TextInput style={styles.input}
                        placeholder="Telefone 1"
                        autoCorrect={false}
                        keyboardType="number-pad"
                    />
                    <TextInput style={styles.input}
                        placeholder="Telefone 2"
                        autoCorrect={false}
                        keyboardType="number-pad"
                    />
                    <TextInput style={styles.input}
                        placeholder="CNPJ"
                        autoCorrect={false}
                        keyboardType="number-pad"
                    />

                    <View>
                        <Text style={styles.subtitle}>Endereço</Text>
                        <Scope path="address">
                            <View style={styles.formEndereco}>
                                <TextInput style={styles.inputCep}
                                    placeholder="CEP"
                                    autoCorrect={false}
                                    keyboardType="number-pad"
                                />
                                <TouchableOpacity
                                    style={styles.botaoVerificar}
                                    onPress={() => { }}
                                >
                                    <Text style={styles.botaoText}>Verificar</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.formEndereco}>
                                <TextInput style={styles.inputCidade}
                                    editable={false}
                                    placeholder="Cidade"
                                    autoCorrect={false}
                                />
                                <TextInput style={styles.inputUf}
                                    editable={false}
                                    placeholder="UF"
                                    autoCorrect={false}
                                />
                            </View>

                            <TextInput style={styles.inputBairro}
                                editable={false}
                                placeholder="Bairro"
                                autoCorrect={false}
                            />

                            <View style={styles.formEndereco}>
                                <TextInput style={styles.inputComplemento}
                                    placeholder="Complemento"
                                    autoCorrect={false}
                                />
                                <TextInput style={styles.inputNumero}
                                    placeholder="Número"
                                    autoCorrect={false}
                                    keyboardType="number-pad"
                                />
                            </View>
                        </Scope>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => { }}
                        >
                            <Text style={styles.botaoText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </Form>
            </ScrollView>
        </View>
    );
}