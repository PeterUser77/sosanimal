import { Form } from '@unform/mobile';
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Input from '../../components/Form/Input';
import TextInputArea from '../../components/Form/TextInputArea';
import global from '../../global';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Case() {
    const navigation = useNavigation();


    const formRegisterIncident = useRef(null);

    function handleSubmit(data) {
        console.log(data);
    };

    function navigateToHomeOng() {
        navigation.navigate('HomeOng');
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

            <Form ref={formRegisterIncident} onSubmit={handleSubmit}>
                <View style={styles.title}>
                    <Text style={styles.titletext}>ONG</Text>
                </View>

                <View style={styles.description}>
                    <TextInputArea
                        containerStyle={styles.textareaContainer}
                        style={styles.textButton}
                        placeholder="digite a descrição"
                        name="description"
                    />
                </View>

                <View style={styles.title}>
                    <Text style={styles.titletext}>Valor</Text>
                </View>

                <View style={styles.description}>
                    <Input

                        keyboardType="number-pad"
                        placeholder="R$"
                        name="Valor"
                        style={global.input}
                    />
                </View>

                <View style={global.container}>
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