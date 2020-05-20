import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer'; //importando pacote do mail composer

import styles from './styles';
import global from '../../global';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá <ONG>, estou entrando em contato pois gostaria de ajudar no caso cadelinha atropelada com o valor de 120,00';

    function navigateBack() {
        navigation.goBack();
    }
    //usar pacote expo install expo-mail-composer
    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Heroi do caso: Cadelinha Atropelada',
            recipients: ['sabrina_soarescampos@hotmail.com'],
            body: message,
        })
    }


    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=5561999856866&text=${message}`);
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
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO</Text>
                <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
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