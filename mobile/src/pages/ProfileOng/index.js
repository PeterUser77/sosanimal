import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

export default function ProfileUser() {

    const navigation = useNavigation();

    // function navigateToDetail(incident) {
    //     navigation.navigate('Detail', {incident});
    // }
    function navigateToHomeUser() {
        navigation.navigate('HomeUser');
    }

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.featherIcon}onPress={navigateToHomeUser}>
                <Feather name="arrow-left" size={28} color="#FF8C00" />
            </TouchableOpacity>

            <View style={styles.incident}>
                <Text style={styles.incidentText}>Nome: </Text>
                <Text>Nome</Text>

                <Text style={styles.incidentText}>Nome Fantasia: </Text>
                <Text>Nome Fantasia</Text>

                <Text style={styles.incidentText}>Email: </Text>
                <Text>email@gmail.com</Text>

                <Text style={styles.incidentText}>Telefone: </Text>
                <Text>0000000000000</Text>

                <Text style={styles.incidentText}>CNPJ: </Text>
                <Text>00000000000</Text>

                <Text style={styles.incidentText}>CEP: </Text>
                <Text>00000000</Text>

                <Text style={styles.incidentText}>Cidade: </Text>
                <Text>Cidade</Text>

                <Text style={styles.incidentText}>UF: </Text>
                <Text>State</Text>

                <Text style={styles.incidentText}>Bairro: </Text>
                <Text>Bairro</Text>

                <Text style={styles.incidentText}>Logradouro: </Text>
                <Text>Logradouro</Text>

                <Text style={styles.incidentText}>Complemento: </Text>
                <Text>Casa</Text>

                <Text style={styles.incidentText}>Número: </Text>
                <Text>00</Text>

            </View>

        </View>
    )
}