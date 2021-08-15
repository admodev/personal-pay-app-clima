import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

// Components
import ActualWeatherComponent from '../components/ActualWeatherComponent';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainView}>
            <ActualWeatherComponent />
            <TouchableOpacity onPress={() => navigation.navigate('Favourites')}>
                <Text>Ir a favoritos</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    }
});

export default Home;
