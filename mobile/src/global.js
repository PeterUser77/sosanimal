import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    // Container que engloba toda a página
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
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
    // Container para centralizar a Logo
    containerLogo: {
        alignItems: "center",
    },

    // Input padrão grande
    input: {
        marginTop: 5,
        padding: 10,
        width: '90%',
        height: 50,
        fontSize: 16,
        borderRadius: 10,
        fontWeight: 'bold',
        backgroundColor: '#FFFF',
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

    // Texto do Button
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFF',
    },

    
});