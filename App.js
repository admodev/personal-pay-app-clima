/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Views
import Home from './views/Home';
import Favourites from './views/Favourites';

const App = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarActiveBackgroundColor: '#FF5F58',
                        tabBarInactiveBackgroundColor: '#FF5F58'
                    }}
                />
                <Tab.Screen
                    name='Favourites'
                    component={Favourites}
                    options={{
                        headerShown: false,
                        tabBarActiveBackgroundColor: '#FF5F58',
                        tabBarInactiveBackgroundColor: '#FF5F58'
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
