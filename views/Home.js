import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const Home: () => Node = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text>Home</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Favourites')}
                >
                    <Text>Ir a favoritos</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Home;
