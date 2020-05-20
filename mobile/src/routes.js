import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Init from './pages/Init';
import Auth from './pages/Auth';
import RegisterUser from './pages/RegisterUser';
import RegisterOng from './pages/RegisterOng';
import HomeUser from './pages/HomeUser';
import OngIncidents from './pages/OngIncidents';
import RegisterIncident from './pages/RegisterIncident';
import EmptyOng from './pages/EmptyOng';
import HomeOng from './pages/HomeOng';



const AppStack = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="RegisterOng" component={RegisterOng} />
                <AppStack.Screen name="RegisterIncident" component={RegisterIncident} />
                <AppStack.Screen name="OngIncidents" component={OngIncidents} />
                <AppStack.Screen name="RegisterUser" component={RegisterUser} />
                <AppStack.Screen name="HomeUser" component={HomeUser} />
                <AppStack.Screen name="EmptyOng" component={EmptyOng} />
                <AppStack.Screen name="Init" component={Init} />
                <AppStack.Screen name="Auth" component={Auth} />

                <AppStack.Screen name="HomeOng" component={HomeOng} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}
