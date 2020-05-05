import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Init from './pages/Init';
import Auth from './pages/Auth';
import Register from './pages/Register';
import RegisterOng from './pages/RegisterOng';

const AppStack = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Init" component={Init} />
                <AppStack.Screen name="Auth" component={Auth} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="RegisterOng" component={RegisterOng} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}
