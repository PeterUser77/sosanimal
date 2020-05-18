import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';



export default StyleSheet.create({
    
    container: {
        flex: 1, 
        backgroundColor: '#E5ECE8',        
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

    title : {
        marginTop: 20, 
        padding: 15

    },

    titletext: {
        fontSize: 20,  
        fontWeight: 'bold',
        color: '#FF8C00'

    },

    description: {
        padding: 15,
    },

    descriptiontext: {
        fontSize: 14, 
        color: '#474a51',
    },

    buttoncontainer:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'   
    },

    button:{
        padding: 24,
        width:'50%',
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginTop: 24,      
    }, 

    detailsButton: {
        alignItems: 'center',
        justifyContent: 'center'
        
    
    },

    detailButtonText:{
        color: '#FF8C00',
        fontSize: 15,
        fontWeight: 'bold',
        

    }
    
});

