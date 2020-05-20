import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    AsyncStorage,
    Alert,
} from 'react-native'
import styles from './styles';
import global from '../../global';
import Api from '../../service/Api';


import { useNavigation, useRoute } from '@react-navigation/native';


export default function Home() {

    const navigation = useNavigation();
    const KEY_CD_ONG = 'KEY_CD_ONG';
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(0);
    const [load, setLoad] = useState(false);

    function navigateToRegisterIncident() {
        navigation.navigate('RegisterIncident');
    }

    function navigateToHomeOng() {
        navigation.navigate('HomeOng', { "total": total });
    }
    
    async function loadIncidents() {
        if (load) {
            return;
        }

        if (total > 0 && incidents.length == total) {

        }

        const cdOng = await AsyncStorage.getItem(KEY_CD_ONG);

        setLoad(true);
        const response = await Api.get('incident/findInProgressByCdOng?cdOng=' + cdOng, {
            params: { page }
        });

        setIncidents([...incidents, ...response.data.content]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoad(false);
    }

    useEffect(() => {
        loadIncidents();
    }, []);

    async function completed(cdIncident) {

        Alert.alert(
            "Concluir caso",
            "Tem certeza que deseja concluir o caso?",
            [
                {
                    text: "Cancelar",
                    onPress: () => { },
                    style: "cancel"
                },
                {
                    text: "Confirmar", onPress: () => markIncidentAsCompleted(cdIncident)}
            ],
            { cancelable: false }
        );

    }

    async function canceled(cdIncident) {

        Alert.alert(
            "Cancelar caso",
            "Tem certeza que deseja cancelar o caso?",
            [
                {
                    text: "Cancelar",
                    onPress: () => { },
                    style: "cancel"
                },
                {
                    text: "Confirmar", onPress: () => markIncidentAsCanceled(cdIncident)}
            ],
            { cancelable: false }
        );

    }

    function edit(incident){
        navigation.navigate('RegisterIncident', incident)
    }

    async function markIncidentAsCanceled(cdIncident){
        await Api.get('incident/markIncidentAsCanceled?cdIncident=' + cdIncident);
    }

    async function markIncidentAsCompleted(cdIncident){
        await Api.get('incident/markIncidentAsCompleted?cdIncident=' + cdIncident);
    }

    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToRegisterIncident()}>

                    <Text style={styles.botaoText}> Cadastrar </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={global.menuButton}
                    onPress={() => navigateToHomeOng()}>
                    <Text style={styles.botaoText}> Voltar </Text>
                </TouchableOpacity>

            </View>

            <View style={styles.totalIncidents}>
                <Text style={styles.totalIncidentsText}> Total de Casos ativos: {total} </Text>
            </View>


            <View style={styles.incidentsList}>
                <FlatList
                    data={incidents}
                    keyExtractor={incident => String(incident.cdIncident)}
                    showsVerticalScrollIndicator={false}
                    onEndReached={loadIncidents}
                    onEndReachedThreshold={0.5}
                    renderItem={({ item: incident }) => (
                        <View style={styles.incident}>
                            <Text style={styles.incidentProperty}>Titulo:</Text>
                            <Text style={styles.incidentValue}>{incident.title}</Text>

                            <Text style={styles.incidentProperty}>Caso:</Text>
                            <Text style={styles.incidentValue}>{incident.description}</Text>

                            <Text style={styles.incidentProperty}>Valor:</Text>
                            <Text style={styles.incidentValue}>{incident.value}</Text>

                            <View style={styles.incident2}>

                                <TouchableOpacity
                                    style={styles.botaoEnd}
                                    onPress={() => completed(incident.cdIncident)}>
                                    <Text style={styles.botaoText}> Concluir </Text>
                                </TouchableOpacity>


                                <TouchableOpacity
                                    style={styles.botaoEnd}
                                    onPress={() => canceled()}>
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