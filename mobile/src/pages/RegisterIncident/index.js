import { useNavigation, useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import React, { useRef, useState } from 'react';
import { Alert, AsyncStorage, Text, TouchableOpacity, View } from 'react-native';
import Input from '../../components/Form/Input';
import TextInputArea from '../../components/Form/TextInputArea';
import global from '../../global';
import Api from '../../service/Api';
import styles from './styles';

export default function RegisterIncident() {
    const navigation = useNavigation();
    const [isEditable, setIsEditable] = useState(false);
    const KEY_CD_ONG = 'KEY_CD_ONG';
    const route = useRoute();
    const incident = route.params;
    const formRegisterIncident = useRef();

    function navigateToHomeIncident() {
        navigation.goBack();
    }

    function loadData() {
        if (typeof incident !== "undefined") {
            console.log(incident.title);
            console.log(incident.description);
            console.log(incident.value);
            formRegisterIncident.current.setFieldValue('title', incident.title);
            formRegisterIncident.current.setFieldValue('description', incident.description);
            formRegisterIncident.current.setFieldValue('value', incident.value);
            setIsEditable(true);
        }else{
            null;
        }
    }

    async function handleSubmit(data) {

        if (isEditable) {
            await Api.post('incident/edit', data)
                .then(() => {
                    Alert.alert("Sucesso", "Caso editado com sucesso!", [
                        { text: "OK", onPress: () => navigateToHomeIncident() }
                    ], { cancelable: false });
                }).catch(err => {
                    Alert.alert("Erro", "Ocorreu um erro ao tentar o caso!", [
                        { text: "OK", onPress: () => { } }
                    ], { cancelable: false });
                })
        } else {
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
        }
    };

    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToHomeIncident()}>
                    <Text style={global.textButton}> Voltar </Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Cadastro de Caso</Text>

            <Form ref={formRegisterIncident}
                onSubmit={handleSubmit}>


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