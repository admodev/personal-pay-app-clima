/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// Views
import Home from './views/Home';

const App: () => Node = () => {
    return (
        <NavigationContainer>
            <Home />
        </NavigationContainer>
    );
};

export default App;
