import React, { Component } from 'react';
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
import styles from './styles';
import global from '../../global';


import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToHome()}>
                    <Text style={global.textButton}> ONG </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToRegister()}>
                    <Text style={global.textButton}> Perfil </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToRegister()}>
                    <Text style={global.textButton}> Sair </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.totalIncidents}>
                <Text style={styles.totalIncidentsText}> Total de Casos: 0 </Text>
            </View>

            <View style={styles.incidentsList}>
                <FlatList
                    data={[1, 2, 3]}
                    renderItem={() => (
                        <View style={styles.incident}>
                            <Text style={styles.incidentTextTitle}>Ong:</Text>
                            <Text style={styles.incidentTextDescription}>Nome Da ONG</Text>

                            <Text style={styles.incidentTextTitle}>Caso:</Text>
                            <Text style={styles.incidentTextDescription}>Descricao do Caso</Text>

                            <Text style={styles.incidentTextTitle}>Valor:</Text>
                            <Text style={styles.incidentTextDescription}>R$ 100,00</Text>

                            <TouchableOpacity style={styles.detailButton} onPress={navigateToDetail}>
                                <Text style={styles.detailButtonText}>+ Detalhes</Text>
                            </TouchableOpacity>
                        </View>

                    )}
                />
            </View>



        </View>
    );

}