import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer'; 

import styles from './styles';
import global from '../../global';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    const message = `Olá ${incident.ong.fantasyName}, estou entrando em contato pois gostaria de ajudar com o caso "${incident.title}" com o valor de R$ ${incident.value}.`;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Heroi do caso: ${incident.title}`,
            recipients: [`${incident.ong.email}`],
            body: message,
        })
    }


    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incident.ong.phone}&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#FF8C00" />
                </TouchableOpacity>

            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.ong.fantasyName}</Text>

                <Text style={styles.incidentProperty}>CASO</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
    <Text style={styles.incidentValue}>R$ {incident.value}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia</Text>
                <Text style={styles.heroTitle}>Ajude neste caso!</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={global.textButton}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={global.textButton}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}