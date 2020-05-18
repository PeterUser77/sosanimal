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
        fontSize: 15,
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
        fontSize: 18,
        fontWeight: 'bold',
       
    }, 

    incidentsList:{
        flex: 1, 
    }, 

    incident:{
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginBottom: 10,
    }, 

    incidentProperty:{
        fontSize:14, 
        color: '#FF8C00',
        fontWeight: 'bold',
        
    }, 
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 10,
    },

    detailsButton: {
        alignItems: 'flex-end',
    },

    detailButtonText:{
        color: '#e02041',
        fontSize: 10,
        fontWeight: 'bold',
    },

    incident2: { 
        flex:1,
         flexDirection:'row', 
        justifyContent: 'space-between',
     },

     botaoEnd: {
       width:'25%',
        height: 30,
        backgroundColor: '#fc9335',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    }
});

