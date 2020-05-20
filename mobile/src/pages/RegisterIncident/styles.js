import { StyleSheet } from 'react-native';



export default StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
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

    title: {
        paddingBottom: 0,
        fontWeight: 'bold',
        fontSize: 30,
        color: '#696969',
        marginTop: 12,
        marginBottom: 12,
        marginLeft: 20,
      },
    
    titletext: {
        fontSize: 20,  
        fontWeight: 'bold',
        color: '#FF8C00'
    },

    description: {
        fontSize: 20,  
        padding: 15,
        borderRadius: 10,
    },


    buttoncontainer:{
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -230,
    },

    button:{
        padding: 24,
        width:330,
        borderRadius: 10,
        backgroundColor: '#FF8C00',
        marginTop: 50, 
             
    }, 

    detailsButton: {
        alignItems: 'center',
        justifyContent: 'center'
        
    
    },

    detailButtonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },

    textareaContainer: {
        width: 330,
        height: 200,
        padding: 5,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginTop: 7,
    },

    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 200,
        fontSize: 14,
        color: '#333',
    },

    RegisterButton: {
        color: '#E5ECE8',
    },
    textAreaText:{  
        fontWeight: 'bold',
    },
});