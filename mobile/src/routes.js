import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Init from './pages/Init';
import Auth from './pages/Auth';
import Register from './pages/Register';
import RegisterOng from './pages/RegisterOng';
import Home from './pages/Home';
import ONG from './pages/ONG';
import Case from './pages/Case';
import ListarONG from './pages/ListarONG';
import HomeONG from './pages/HomeONG';


const AppStack = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Init" component={Init} />
                <AppStack.Screen name="Auth" component={Auth} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="RegisterOng" component={RegisterOng} />
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="ONG" component={ONG} />
                <AppStack.Screen name="Case" component={Case} />
                <AppStack.Screen name="ListarONG" component={ListarONG} />
                <AppStack.Screen name="HomeONG" component={HomeONG} />
         
            </AppStack.Navigator>

        </NavigationContainer>
    );
}
