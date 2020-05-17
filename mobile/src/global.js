import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    // Container que engloba toda a página
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    // Container para centralizar a Logo
    containerLogo: {
        alignItems: "center",
    },

    // Container com componentes lado a lado
    containerSpaceBetween: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    // Container com background cinza e margem no statusbar
    containerStatusBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#E5ECE8',
    },

    // Imagem de background para cada tela
    backgroundImage: {
        justifyContent: "center",
        flex: 1,
        resizeMode: "cover",
        width: '100%',
        height: '100%',
    },

    // Style da logo
    logo: {
        width: 250,
        height: 250,
    },


    // Input padrão grande
    input: {
        marginTop: 5,
        padding: 10,
        width: 330,
        height: 50,
        fontSize: 16,
        borderRadius: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFFFF',
    },

    // Button padrão grande, arredondado
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 330,
        height: 50,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#FF8C00',
    },

    // Button padrão grande, desabilitado
    disabledButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 330,
        height: 50,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#FDC38A',
    },

    buttonBirthDate: {
        marginTop: 5,
        padding: 10,
        width: 330,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
    },

    // Texto do Button
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },

    // Texto do Button Birth Date
    textButtonBirthDate: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#C3C3C3',
    },
});