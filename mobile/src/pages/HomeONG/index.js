import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import styles from './styles';
import global from '../../global';

import { useNavigation, useRoute } from '@react-navigation/native';

export default function HomeOng() {

    const navigation = useNavigation();
    const route = useRoute();
    const fantasyName = route.params.fantasyName;
    const total = route.params.total;

    function navigateToOngIncidents() {
        navigation.navigate('OngIncidents');
    }

    function navigateToHomeUser() {
        navigation.navigate('HomeUser');
    }

    function navigateToProfileOng() {
        navigation.navigate('ProfileOng');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToOngIncidents()}>
                    <Text style={styles.botaoText}> Casos </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToProfileOng()}>
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
    <Text style={styles.totalizaCasosText}> Seja bem-vindo a {fantasyName}</Text>
                </View>

                <View style={styles.totalizaCasos}>
    <Text style={styles.totalizaCasosText}> Existem {total} casos ativos! </Text>
                </View>

            </View>


        </View>
    );

}