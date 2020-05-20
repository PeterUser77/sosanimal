import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
    },

    header: {
        alignItems: 'center',
        backgroundColor: '#E5ECE8',
        flexDirection: 'row',
    },
    containerTotalIncidents: {
        padding: 10,
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#C9C9C3",
    },
    welcomeText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    saveDay:{
        fontSize: 16,
        fontWeight: 'bold',

    },
    totalIncidentsText: {
        fontSize: 16,
    },

    totalIncidentsTextBold: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    incidentsList: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
    },

    incident: {
        padding: 10,
        width: 330,
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginBottom: 10,
        
    },

    incidentTextTitle: {
        fontSize: 14,
        color: '#FF8C00',
        fontWeight: 'bold',

    },
    incidentTextDescription: {
        marginTop: 8,
        marginLeft: 7,
        fontSize: 15,
        marginBottom: 10,
    },

    detailButton: {
        alignItems: 'flex-end',
    },
    detailButtonText: {
        color: '#FF8C00',
        fontSize: 15,
        fontWeight: 'bold',
    }

});

