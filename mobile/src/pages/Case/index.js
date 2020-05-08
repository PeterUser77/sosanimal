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



export default function Case() {
    const navigation = useNavigation();

    function navigateToAuth() {
        navigation.navigate('Auth');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigateToAuth()}>

                    <Text style={styles.botaoText}> Voltar </Text>
                </TouchableOpacity>

            </View>
    
            <View style = { styles.title }>
                <Text style ={ styles.titletext}>ONG</Text>    
            </View> 

            <View style = { styles.description }>
                <Text style= { styles.descriptiontext}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                including versions of Lorem Ipsum.
                </Text>
            </View>

            <View style = { styles.title }>
                <Text style ={ styles.titletext}>Valor</Text>    
            </View> 

            <View style = { styles.description }>
                <Text style= { styles.descriptiontext}>
                 R$ 120,00
                </Text>
            </View>

           <View style = {styles.buttoncontainer}>
            <View style={styles.button}>
                <TouchableOpacity style={styles.detailsButton} onPress={() => {}}>
                    <Text style={styles.detailButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            </View>
             
           
            

        </View> 
    );

}