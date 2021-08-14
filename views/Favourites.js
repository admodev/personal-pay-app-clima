import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const Favourites: () => Node = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text>Favourites</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Ir a atras</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Favourites;
