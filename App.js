/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Image } from 'react-native';
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
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen
                    name='Home'
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarActiveBackgroundColor: '#FF5F58',
                        tabBarInactiveBackgroundColor: '#FF5F58',
                        tabBarIcon: () => (
                            <Image
                                source={require('./assets/img/icons8-casa-48.png')}
                                style={{ height: 30, width: 30 }}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name='Favourites'
                    component={Favourites}
                    options={{
                        headerShown: false,
                        tabBarActiveBackgroundColor: '#FF5F58',
                        tabBarInactiveBackgroundColor: '#FF5F58',
                        tabBarIcon: () => (
                            <Image
                                source={require('./assets/img/icons8-para-ti-48.png')}
                                style={{ height: 30, width: 30 }}
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
