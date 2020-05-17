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
import { useNavigation } from '@react-navigation/native';
import global from '../../global';


export default function Case() {
    const navigation = useNavigation();

    function navigateToAuth() {
        navigation.navigate('Auth');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={global.botaoHome}
                    onPress={() => navigateToAuth()}>

                    <Text style={global.textButton}> Cadastrar </Text>
                </TouchableOpacity>

            </View>
    
          
            <View style = { styles.description }>
                <Text style= { styles.descriptiontext}>
                 Não possui ong disponivel! 
                </Text>
            </View>

            </View>
           
            

     
    );

}