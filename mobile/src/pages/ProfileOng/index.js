import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import global from '../../global';

import styles from './styles';

export default function ProfileOng() {

    const navigation = useNavigation();
    const route = useRoute();
    const ong = route.params;

    function navigateToHomeUser() {
        navigation.navigate('HomeOng');
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.featherIcon} onPress={navigateToHomeUser}>
                <Feather name="arrow-left" size={28} color="#FF8C00" />
            </TouchableOpacity>

            <View style={global.container}>
                <Text style={styles.title}>Dados da Ong</Text>
            </View>

            <View style={styles.incident}>
                <Text style={styles.titleProfile}>Nome: </Text>
                <Text>{ong.name}</Text>

                <Text style={styles.titleProfile}>Nome Fantasia: </Text>
                <Text>{ong.fantasyName}</Text>

                <Text style={styles.titleProfile}>Email: </Text>
                <Text>{ong.email}</Text>

                <Text style={styles.titleProfile}>Telefone: </Text>
                <Text>{ong.phone}</Text>

                <Text style={styles.titleProfile}>CNPJ: </Text>
                <Text>{ong.document}</Text>

                <Text style={styles.titleProfile}>CEP: </Text>
                <Text>{ong.cep}</Text>

                <Text style={styles.titleProfile}>Cidade: </Text>
                <Text>{ong.city}</Text>

                <Text style={styles.titleProfile}>UF: </Text>
                <Text>{ong.state}</Text>

                <Text style={styles.titleProfile}>Bairro: </Text>
                <Text>{ong.neighborhood}</Text>

                <Text style={styles.titleProfile}>Logradouro: </Text>
                <Text>{ong.publicPlace}</Text>

                <Text style={styles.titleProfile}>Complemento: </Text>
                <Text>{ong.complement}</Text>

                <Text style={styles.titleProfile}>Número: </Text>
                <Text>{ong.number}</Text>
            </View>

        </View>
    )
}