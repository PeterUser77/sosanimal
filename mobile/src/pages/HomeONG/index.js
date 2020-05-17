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



    function navigateToHome(){
        navigation.navigate('Home');
    }

    function navigateToONG(){
        navigation.navigate('ONG');
    }
   
   
    return (
        <View style={global.containerMenu}>
            <View style={global.header}>
                <TouchableOpacity
                    style={global.botaoHome}
                    onPress={() => navigateToONG()}>

                    <Text style={global.textButton}> Casos </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={global.botaoHome}
                    onPress={() => navigateToProfile()}>
                    <Text style={global.textButton}> Perfil </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={global.botaoHome}
                    onPress={() => navigateToHome()}>
                    <Text style={global.textButton}> Voltar </Text>
                </TouchableOpacity>
            </View>
    
            
        <View style = {styles.OngContainer}>

            <View style={styles.totalizaCasos}>
                <Text style={styles.totalizaCasosText}> Seja bem-vindo a Ong Test!</Text>
            </View>

           <View style={styles.totalizaCasos}>
                <Text style={styles.totalizaCasosText}> Existem 0 casos ativos! </Text>
            </View>

        </View>

            
         
           
            

        </View> 
    );

}