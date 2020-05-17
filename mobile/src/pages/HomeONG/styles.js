import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';



export default StyleSheet.create({
    
    container: {
        flex: 1, 
        paddingTop: +20,
    },
    header:{
        
        alignItems: 'center',
        backgroundColor: '#E5ECE8',
        flexDirection:'row',
        
    },
    botao: {
        flex: 1,
        height: 50,
        backgroundColor: '#FF8C00',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    botaoText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffff',
    },

    OngContainer :{
        paddingTop: 200, 
        justifyContent: "center"
    }, 
    
    totalizaCasos:{
        padding: 10,
        height: 50,
        alignItems: 'center',
    },

    totalizaCasosText:{
        fontSize: 18,
        fontWeight: 'bold',
       
    }, 

    

});

