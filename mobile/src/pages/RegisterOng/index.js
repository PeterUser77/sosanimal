import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Input from '../../components/Form/Input';

import global from '../../global';
import styles from './styles';
import { mask, unMask } from 'remask';
import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';



export default function RegisterOng() {

    const navigation = useNavigation();

    const formRegisterOng = useRef(null);
//

  
    function handleSubmit(data) {
        console.log(data);
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
                                name="Phone"
                                placeholder="Telefone 1"
                                keyboardType="number-pad"
                                autoCorrect={false}
                            />
                            <Input
                                style={global.input}
                                name="otherPhone"
                                placeholder="Telefone 2"
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
                            onPress={() => { formRegisterOng.current.submitForm() }}
                        >
                            <Text style={global.textButton}>Cadastrar</Text>
                        </TouchableOpacity>

                    </Form>
                </ScrollView>
        </View>
    );
}