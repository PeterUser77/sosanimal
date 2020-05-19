import React from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import global from '../../global';


export default function EmptyOng() {
    const navigation = useNavigation();

    function navigateToRegisterOng() {
        navigation.navigate('RegisterOng');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToRegisterOng()}>
                    <Text style={styles.botaoText}> Cadastrar </Text>
                </TouchableOpacity>

            </View>


            <View style={styles.description}>
                <Text style={styles.descriptionText}>
                    Não possui ong disponivel!
                </Text>
            </View>

        </View>
    );
}