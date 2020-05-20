import { Form } from '@unform/mobile';
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View, AsyncStorage, Alert } from 'react-native';
import Input from '../../components/Form/Input';
import TextInputArea from '../../components/Form/TextInputArea';
import global from '../../global';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Api from '../../service/Api';

export default function RegisterIncident() {
    const navigation = useNavigation();
    const KEY_CD_ONG = 'KEY_CD_ONG';

    const formRegisterIncident = useRef(null);

    function navigateToHomeIncident() {
        navigation.navigate('OngIncidents')
    }

    async function handleSubmit(data) {

        const cdOng = await AsyncStorage.getItem(KEY_CD_ONG);

        await Api.put('incident/new', {
            "incident": {
                "title": data.title,
                "description": data.description,
                "value": data.value
            },
            "cdOng": cdOng
        }).then(() => {
            Alert.alert("Sucesso", "Caso cadastrado com sucesso!", [
                { text: "OK", onPress: () => navigateToHomeIncident() }
            ], { cancelable: false });

        }).catch(err => {
            if (err.response.data.message) {
                Alert.alert("Erro", err.response.data.message, [
                    { text: "OK", onPress: () => { } }
                ], { cancelable: false });
            } else {
                Alert.alert("Erro", "Ocorreu um erro ao tentar cadastrar o caso, tente novamente! Se o problema persistir contacte o administrador do sistema.", [
                    { text: "OK", onPress: () => { } }
                ], { cancelable: false });
            }
        });

    };

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToHomeOng()}>
                    <Text style={global.textButton}> Voltar </Text>
                </TouchableOpacity>
            </View>

                <Text style={styles.title}>Cadastro de Caso</Text>

            <Form ref={formRegisterIncident} onSubmit={handleSubmit}>

                <View style={styles.description}>

                    <Input
                        placeholder="Título"
                        name="title"
                        style={global.input}
                    />

                    <TextInputArea
                        containerStyle={styles.textareaContainer}
                        style={styles.textAreaText}
                        placeholder="Descrição do Caso"
                        name="description"
                    />

                    <Input
                        keyboardType="number-pad"
                        placeholder="Valor para doação em R$"
                        name="value"
                        style={global.input}
                    />
                    <TouchableOpacity
                        style={global.button}
                        onPress={() => { formRegisterIncident.current.submitForm() }}>
                        <Text style={styles.detailButtonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </Form>
        </View>

    );

}