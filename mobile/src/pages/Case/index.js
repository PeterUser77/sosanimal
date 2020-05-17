import { Form } from '@unform/mobile';
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Input from '../../components/Form/Input';
import TextInputArea from '../../components/Form/textArea';
import global from '../../global';
import styles from './styles';
import { mask, unMask } from 'remask';
import { useNavigation } from '@react-navigation/native';

export default function Case() {
    const navigation = useNavigation();
    // AQUI ESTOU CRIANDO A MASCARA
    const [value, setValue] = useState("");
    const onChange = ev => {
        const originalValue = unMask(ev.target.value)
        const maskedValue = mask(originalValue,
            [
                '999.999.999,99'
            ]);
        setValue(maskedValue);
    };

    // FIM DOS PARAMETROS DA MASCARA 

    const formAuth = useRef(null);

    function handleSubmit(data) {
        console.log(data);
        // { email: 'test@example.com', password: '123456' }
    };
    function navigateToONG() {
        navigation.navigate('ONG');
    }
    function navigateToHomeONG() {
        navigation.navigate('HomeONG');
    }
    return (

        <View style={global.containerMenu}>
            <Form ref={formAuth} onSubmit={handleSubmit}>
                <View style={global.header}>
                    <TouchableOpacity
                        style={global.botaoHome}
                        onPress={() => navigateToONG()}>

                        <Text style={global.textButton}> Voltar </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.title}>
                    <Text style={styles.titletext}>ONG</Text>
                </View>

                <View style={styles.description}>

                    <TextInputArea
                        containerStyle={styles.textareaContainer}
                        style={styles.textButton}
                        type="text"
                        placeholder="digite a descrição"
                        name="Descricao"
                    />
                </View>

                <View style={styles.title}>
                    <Text style={styles.titletext}>Valor</Text>
                </View>

                <View style={styles.description}>

                    <Input
                        type="text"
                        placeholder="R$"
                        name="Valor"
                        onChange={onChange}
                        value={value}
                        style={global.input}
                    />
                </View>

                <View style={styles.buttoncontainer}>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.detailsButton} onPress={() => { formAuth.current.submitForm() }}>
                            <Text style={styles.detailButtonText}>Cadastrar</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Form>
        </View>

    );

}
