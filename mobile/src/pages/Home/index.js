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

    function navigateToDetail(){
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={global.botaoHome}
                    onPress={() => navigateToHome()}>

                    <Text style={styles.botaoText}> ONG </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={global.botaoHome}
                    onPress={() => navigateToRegister()}>
                    <Text style={styles.botaoText}> PERFIL </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={global.botaoHome}
                    onPress={() => navigateToRegister()}>
                    <Text style={styles.botaoText}> LOGOUT </Text>
                </TouchableOpacity>
            </View>
    
            <View style={styles.totalizaCasos}>
                <Text style={styles.totalizaCasosText}> Total de Casos: 0 </Text>
            </View>
         
           <View style = {styles.incidentsList}>
            <FlatList 
            data= {[1, 2, 3]}
            renderItem = { () => ( 
            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>NomeDaONG</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Descricao do Caso</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 100,00</Text>

                <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetail}>
                    <Text style={styles.detailButtonText}>+ Detalhes</Text>
                </TouchableOpacity>
            </View>
            
             )}
             />
             </View>
           
            

        </View> 
    );

}