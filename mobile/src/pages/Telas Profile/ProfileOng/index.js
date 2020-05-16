import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';
import Input from '../../components/Form/Input';

import global from '../../global';
import styles from './styles';
import { Form } from '@unform/mobile';
import { Scope } from '@unform/core';



export default function RegisterOng() {


    const formRegisterOng = useRef(null);

    function handleSubmit(data) {
        console.log(data);
    }

    return (

        <View style={global.containerStatusBar}>
            <View style={styles.LogoView}>
                <Image
                    source={require('../../assets/PerfilONG.jpg')}
                    style={styles.logo}
                />
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Form ref={formRegisterOng} onSubmit={handleSubmit}>

                    <View style={global.container}>
                        <Input
                            style={global.inputDisable}
                            name="name"
                            placeholder="Nome"
                            value="Teste da Silva"
                            autoCorrect={false}
                            editable={false}
                        />
                        <Input
                            style={global.inputDisable}
                            name="fantasyName"
                            placeholder="Nome Fantasia"
                            value="Os Silva"
                            autoCorrect={false}
                            editable={false}
                        />
                        <Input
                            style={global.inputDisable}
                            name="email"
                            placeholder="Email"
                            value="TestaSilv@gmail.com"
                            autoCorrect={false}
                            editable={false}
                        />
                        <Input
                            style={global.inputDisable}
                            name="Phone"
                            placeholder="Telefone 1"
                            keyboardType="number-pad"
                            value="33358888"
                            autoCorrect={false}
                            editable={false}
                        />
                        <Input
                            style={global.inputDisable}
                            name="otherPhone"
                            placeholder="Telefone 2"
                            keyboardType="number-pad"
                            value="33352222"
                            autoCorrect={false}
                            editable={false}
                        />
                        <Input
                            style={global.inputDisable}
                            name="document"
                            placeholder="CNPJ"
                            keyboardType="number-pad"
                            value="35.573.724/0001-09"
                            autoCorrect={false}
                            editable={false}
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
                                    editable={false}
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
                                    editable={false}
                                />
                                <Input
                                    style={styles.inputNumber}
                                    name="number"
                                    keyboardType="number-pad"
                                    placeholder="Número"
                                    autoCorrect={false}
                                    editable={false}
                                />
                            </View>
                        </View>
                    </Scope>
                <View style={styles.containerButton}>
                    <TouchableOpacity disabled={true}
                        style={global.buttonProfile}
                        onPress={() => { formRegisterOng.current.submitForm() }}
                    >
                        <Text style={global.textButton}>Salvar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={global.buttonProfile}
                        onPress={() => { formRegisterOng.current.submitForm() }}
                    >
                        <Text style={global.textButton}>Voltar</Text>
                    </TouchableOpacity>
                    </View>     
                </Form>
            </ScrollView>
        </View>
    );
}