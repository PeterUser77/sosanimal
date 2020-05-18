import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'

import styles from '../HomeOng/styles';
import global from '../../global';

import { useNavigation } from '@react-navigation/native';



export default function HomeOng() {
    const navigation = useNavigation();

    function navigateToRegisterOngIncident(){
        navigation.navigate('OngIncidents');
    }

    function navigateToHomeUser() {
        navigation.navigate('HomeUser');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToRegisterOngIncident()}>
                    <Text style={styles.botaoText}> Casos </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToProfile()}>
                    <Text style={styles.botaoText}> Perfil </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToHomeUser()}>
                    <Text style={styles.botaoText}> Voltar </Text>
                </TouchableOpacity>
            </View>


            <View style={styles.OngContainer}>

                <View style={styles.totalizaCasos}>
                    <Text style={styles.totalizaCasosText}> Seja bem-vindo a Ong Test!</Text>
                </View>

                <View style={styles.totalizaCasos}>
                    <Text style={styles.totalizaCasosText}> Existem 0 casos ativos! </Text>
                </View>

            </View>


        </View>
    );

}