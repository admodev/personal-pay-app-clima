import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

const Home: () => Node = () => {
    return (
        <SafeAreaView>
            <View>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    );
};

export default Home;
