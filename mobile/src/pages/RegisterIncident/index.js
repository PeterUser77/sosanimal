import React, { useRef, Component } from 'react-native';
import {
    Alert,
    Text,
    StyleSheet,
    View,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { Form } from '@unform/mobile';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import global from '../../global';
import Input from '../../components/Form/Input';

export default function Incident() {

    const formIncident = useRef(null);
    const navigation = useNavigation();

    function handleSubmit(data) {
        console.log(data);
    }
    Case
    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={global.botaoHome}
                    onPress={() => navigateToAuth()}>

                    <Text style={styles.botaoText}> Voltar </Text>
                </TouchableOpacity>
            </View>

            <Form ref={formIncident} onSubmit={handleSubmit}>
            
                <View style={styles.title}>
                    <Text style={styles.titletext}>ONG</Text>
                </View>

                <View style={styles.description}>
                    <Input style={styles.descriptiontext}>

                    </Input>
                </View>

                <View style={styles.title}>
                    <Text style={styles.titletext}>Valor</Text>
                </View>

                <View style={styles.description}>
                    <Text style={styles.descriptiontext}> R$ 120,00 </Text>
                </View>

                <View style={styles.buttoncontainer}>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.detailsButton} onPress={() => { formCase.current.submitForm() }}>
                            <Text style={styles.detailButtonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </Form>
        </View>

    );

}