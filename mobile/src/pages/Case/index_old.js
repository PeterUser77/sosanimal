import { Form } from '@unform/mobile';
import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { mask, unMask } from 'remask';
import Input from '../../components/Form/Input';
import global from '../../global';
import styles from './styles';


export default function Case() {
    // AQUI ESTOU CRIANDO A MASCARA
    const [value, setValue] = useState("");
    const onChange = ev => {
        const originalValue = unMask(ev.target.value)
        const maskedValue = mask(originalValue,
            [
                '999.999.999-99', '99.999.999./9999-99'
            ]);

        setValue(maskedValue);

    };

    // FIM DOS PARAMETROS DA MASCARA 
    const formAuth = useRef(null);
    function handleSubmit(data) {
        console.log(data);
        // { email: 'test@example.com', password: '123456' }
    };

    return (

        <View style={styles.container}>
            <Form ref={formAuth} onSubmit={handleSubmit}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={global.botaoHome}
                        onPress={() => navigateToAuth()}>

                        <Text style={styles.botaoText}> Voltar </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.title}>
                    <Text style={styles.titletext}>ONG</Text>
                </View>

                <View style={styles.description}>

                    <Input
                        type="text"
                        placeholder="digite o CPF aqui"
                        name="data"
                        onChange={onChange}
                        value={value}
                    />
                    <div> Valor:{value}</div>
                </View>

                <View style={styles.title}>
                    <Text style={styles.titletext}>Valor</Text>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptiontext}>
                        R$ 120,00
                </Text>
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