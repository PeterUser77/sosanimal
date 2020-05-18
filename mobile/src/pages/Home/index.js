import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
import styles from './styles';
import global from '../../global';


import { useNavigation, useRoute } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation();
    const route = useRoute();
    const KEY_FIST_NAME = 'KEY_FIRST_NAME';
    const KEY_TOKEN = 'KEY_TOKEN';
    const KEY_CD_USER = 'KEY_CD_USER';
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [load, setLoad] = useState(false);
    const userName = route.params.userName;

    async function loadIncidents() {
        if (load) {
            return;
        }

        if (total > 0 && incidents.length == total) {

        }

        setLoad(true);

        const response = await api.get('incidents', {
            params: { page }
        });
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoad(false);
    }

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
                <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View>

    <Text style={styles.title}>Bem vindo(a), {userName}!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <View style={styles.incidentsList}>
                <FlatList
                    data={incidents}
                    keyExtractor={incident => String(incident.cdIncident)}
                    showsVerticalScrollIndicator={false}
                    onEndReached={loadIncidents}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item: incident }) => (
                        <View style={styles.incident}>
                            <Text style={styles.incidentTextTitle}>ONG:</Text>
                            <Text style={styles.incidentTextDescription}>{incident.name}</Text>

                            <Text style={styles.incidentTextTitle}>CASO:</Text>
                            <Text style={styles.incidentTextDescription}>{incident.title}</Text>

                            <Text style={styles.incidentTextTitle}>VALOR:</Text>
                            <Text style={styles.incidentTextDescription}>{Intl.NumberFormat('pt-BR',
                                {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(incident.value)}
                            </Text>

                            <TouchableOpacity style={styles.detailButton} onPress={() => { navigateToDetail() }}>
                                <Text style={styles.detailButtonText}>+ Detalhes</Text>
                            </TouchableOpacity>
                        </View>

                    )}
                />
            </View>



        </View>
    );

}