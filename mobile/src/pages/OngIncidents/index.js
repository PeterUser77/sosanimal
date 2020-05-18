import React from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native'
import styles from './styles';
import global from '../../global';


import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();

    function navigateToIncident() {
        navigation.navigate('Incident');
    }

    function navigateToHomeOng() {
        navigation.navigate('HomeOng');
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToIncident()}>

                    <Text style={styles.botaoText}> Cadastrar Caso </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToHomeOng()}>
                    <Text style={styles.botaoText}> Voltar </Text>
                </TouchableOpacity>


            </View>

            <View style={styles.totalIncidents}>
                <Text style={styles.totalIncidentsText}> Total de Casos: 0 </Text>
            </View>

            <View style={styles.incidentsList}>
                <FlatList
                    data={[1, 2]}
                    renderItem={() => (
                        <View style={styles.incident}>
                            <Text style={styles.incidentProperty}>Ong:</Text>
                            <Text style={styles.incidentValue}>Nome Da Ong</Text>

                            <Text style={styles.incidentProperty}>Caso:</Text>
                            <Text style={styles.incidentValue}>Descricao do Caso</Text>

                            <Text style={styles.incidentProperty}>Valor:</Text>
                            <Text style={styles.incidentValue}>R$ 100,00</Text>

                            <View style={styles.incident2}>

                                <TouchableOpacity
                                    style={styles.botaoEnd}
                                    onPress={() => navigateToAuth()}>
                                    <Text style={styles.botaoText}> Concluir </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.botaoEnd}
                                    onPress={() => navigateToAuth()}>
                                    <Text style={styles.botaoText}> Editar </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.botaoEnd}
                                    onPress={() => navigateToAuth()}>
                                    <Text style={styles.botaoText}> Cancelar </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )}
                />
            </View>
        </View>
    );

}