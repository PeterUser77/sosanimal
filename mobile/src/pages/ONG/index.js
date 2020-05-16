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

   
    function navigateToCase() {
        navigation.navigate('Case');
    }

    function navigateToHomeONG() {
        navigation.navigate('HomeONG');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={global.botaoHome}
                    onPress={() => navigateToCase()}>

                    <Text style={styles.botaoText}> Cadastrar </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={global.botaoHome}
                    onPress={() => navigateToHomeONG()}>
                    <Text style={styles.botaoText}> Voltar </Text>
                </TouchableOpacity>

        
            </View>
    
            <View style={styles.totalizaCasos}>
                <Text style={styles.totalizaCasosText}> Total de Casos: 0 </Text>
            </View>
         
           <View style = {styles.incidentsList}>
            <FlatList 
            data= {[1, 2]}
            renderItem = { () => ( 
            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>NomeDaONG</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Descricao do Caso</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
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