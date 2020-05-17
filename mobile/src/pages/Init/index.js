import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    ImageBackground,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import global from '../../global';
import styles from '../Init/styles';

export default function Init() {

    const navigation = useNavigation();

    function navigateToAuth() {
        navigation.navigate('Auth');
    }

    function navigateToRegister() {
        navigation.navigate('Register');
    }

    function navigateToRegisterOng() {
        navigation.navigate('RegisterOng');
    }

    function navigateToHome() {
        navigation.navigate('Home');
    }

    function navigateToHomeONG() {
        navigation.navigate('HomeONG');
    }

    function navigateToONG() {
        navigation.navigate('ONG');
    }

    function navigateToListaONG() {
        navigation.navigate('ListarONG');
    }

    function navigateToCase() {
        navigation.navigate('Case');
    }
   
  
  
    
    return (

        <View style={global.container}>

            <ImageBackground source={require('../../assets/background-init.jpg')} style={global.backgroundImage}>
                <View style={global.containerLogo}>
                    <Image
                        source={require('../../../assets/logo.png')}
                        style={global.logo}
                    />
                </View>

                <View style={styles.containerButtons}>
                    <TouchableOpacity
                        style={global.button}
                        onPress={() => navigateToAuth()}>
                        <Text style={global.textButton}> Entrar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={global.button}
                        onPress={() => navigateToRegister()}>
                        <Text style={global.textButton}> Registrar </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={global.button}
                        onPress={() => navigateToRegisterOng()}>
                        <Text style={global.textButton}> Registrar ONG</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={global.button}
                        onPress={() => navigateToHome()}>
                        <Text style={global.textButton}> Home </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={global.button}
                        onPress={() => navigateToHomeONG()}>
                        <Text style={global.textButton}> Home ONG </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={global.button}
                        onPress={() => navigateToONG()}>
                        <Text style={global.textButton}> ONG</Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity
                        style={global.button}
                        onPress={() => navigateToListaONG()}>
                        <Text style={global.textButton}> Listar ONG </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={global.button}
                        onPress={() => navigateToCase()}>
                        <Text style={global.textButton}> Cases </Text>
                    </TouchableOpacity>

                
                </View>
            </ImageBackground>
        </View>

    );

}

