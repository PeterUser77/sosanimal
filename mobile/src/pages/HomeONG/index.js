import React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import styles from './styles';
import global from '../../global';

import { useNavigation, useRoute } from '@react-navigation/native';
import Api from '../../service/Api';

export default function HomeOng() {

    const navigation = useNavigation();
    const route = useRoute();
    const fantasyName = route.params.fantasyName;
    const total = route.params.total;
    const KEY_CD_ONG = 'KEY_CD_ONG';

    function navigateToOngIncidents() {
        navigation.navigate('OngIncidents');
    }

    function goBack() {
        navigation.goBack();
    }

    async function navigateToProfileOng() {
        const cdOng = await AsyncStorage.getItem(KEY_CD_ONG);
        
        const res = await Api.post(`ong/findByCdOng?cdOng=${cdOng}`);

        navigation.navigate('ProfileOng', res.data);
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
                    onPress={() => goBack()}>
                    <Text style={styles.botaoText}> Voltar </Text>
                </TouchableOpacity>
            </View>


            <View style={styles.OngContainer}>

                <View style={styles.totalizaCasos}>
    <Text style={styles.totalizaCasosText}> Seja bem-vindo a ONG: {fantasyName}</Text>
                </View>

                <View style={styles.totalizaCasos}>
    <Text style={styles.totalizaCasosText}> Esta ONG possui {total} casos ativos! </Text>
                </View>

            </View>


        </View>
    );

}