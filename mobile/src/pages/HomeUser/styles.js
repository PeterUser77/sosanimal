import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';



export default StyleSheet.create({
    
    container: {
        flex: 1,
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

    totalIncidents:{
        padding: 10,
        width:'100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#C9C9C3",
    },

    totalIncidentsText:{
        fontSize: 16,
        fontWeight: 'bold',
       
    }, 
    incidentsList:{
        flex: 1, 
    }, 

    incident:{
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginBottom: 10,
    }, 

    incidentTextTitle:{
        fontSize:14, 
        color: '#FF8C00',
        fontWeight: 'bold',
        
    }, 
    incidentTextDescription: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 10,
    },

    detailButton: {
        alignItems: 'flex-end',
    },
    detailButtonText:{
        color: '#FF8C00',
        fontSize: 15,
        fontWeight: 'bold',
        
    }
    
});

