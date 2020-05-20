import React from 'react';
import { Feather } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import global from '../../global';

import styles from './styles';

export default function ProfileUser() {

    const navigation = useNavigation();
    const route = useRoute();
    const user = route.params;

    function navigateToHomeUser() {
        navigation.navigate('HomeUser');
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.featherIcon} onPress={navigateToHomeUser}>
                <Feather name="arrow-left" size={28} color="#FF8C00" />
            </TouchableOpacity>

                <View style={global.container}>
                    <Text style={styles.title}>Dados do Usuário</Text>
                </View>

            <View style={styles.incident}>
                <Text style={styles.titleProfile}>Nome: </Text>
                <Text>{user.firstName}</Text>

                <Text style={styles.titleProfile}>Sobrenome: </Text>
                <Text>{user.lastName}</Text>

                <Text style={styles.titleProfile}>Data de Nascimento: </Text>
                <Text>{user.birthDate}</Text>

                <Text style={styles.titleProfile}>Email: </Text>
                <Text>{user.email}</Text>

                <Text style={styles.titleProfile}>Telefone: </Text>
                <Text>{user.phone}</Text>

                <Text style={styles.titleProfile}>CPF: </Text>
                <Text>{user.document}</Text>

                <Text style={styles.titleProfile}>CEP: </Text>
                <Text>{user.cep}</Text>

                <Text style={styles.titleProfile}>UF: </Text>
                <Text>{user.state}</Text>

                <Text style={styles.titleProfile}>Cidade: </Text>
                <Text>{user.city}</Text>

                <Text style={styles.titleProfile}>Logradouro: </Text>
                <Text>{user.publicPlace}</Text>

                <Text style={styles.titleProfile}>Bairro: </Text>
                <Text>{user.neighborhood}</Text>

                <Text style={styles.titleProfile}>Complemento: </Text>
                <Text>{user.complement}</Text>

                <Text style={styles.titleProfile}>Numero: </Text>
                <Text>{user.number}</Text>

            </View>

        </View>
    )
}