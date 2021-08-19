import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Components
import ActualWeatherComponent from '../components/ActualWeatherComponent';
import Today from '../components/TodayComponent';
import Forecast from '../components/Forecast';

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainView}>
            <ActualWeatherComponent />
            <Today />
            <Forecast />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1
    }
});

export default Home;
