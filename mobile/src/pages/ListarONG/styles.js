import { StyleSheet } from 'react-native';


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


    description: {
        alignItems: 'center',
        justifyContent: 'center' ,  
        flex: 1
    },

    descriptiontext: {
        fontSize: 14, 
        color: '#474a51',
    },

  
    
});

