import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Constants from 'expo-constants';



export default StyleSheet.create({

    container: {
        flex: 1,
        paddingHorizontal: 0,

    },
    header: {

        alignItems: 'center',
        backgroundColor: '#E5ECE8',
        flexDirection: 'row',

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
    totalizaCasos: {
        padding: 10,
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: "#C9C9C3",
    },
    totalizaCasosText: {
        fontSize: 18,
        fontWeight: 'bold',

    },
    incidentsList: {

        marginTop: 32,
    },
    incident: {
        padding: 24,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#FFF',
        justifyContent: 'space-between',

    },

    incidentProperty: {
        fontSize: 14,
        color: '#FF8C00',
        fontWeight: 'bold',

    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 10,
    },
    detailsButton: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    detailButtonText: {
        color: '#FF8C00',
        fontSize: 15,
        fontWeight: 'bold'
    }

});

