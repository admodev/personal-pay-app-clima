import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Forecast = () => {
    return (
        <View style={styles.container}>
            <View style={styles.dayContainer}>
                <Text style={styles.todayText}>Lunes</Text>
                <Image
                    source={require('../assets/img/icons8-sol-48.png')}
                    style={{ width: 62, height: 62, margin: 20 }}
                />
            </View>
            <View>
                <Text style={styles.todayText}>Martes</Text>
                <Image
                    source={require('../assets/img/icons8-parcialmente-nublado-lluvia-48.png')}
                    style={{ width: 62, height: 62, margin: 20 }}
                />
            </View>
            <View>
                <Text style={styles.todayText}>Miercoles</Text>
                <Image
                    source={require('../assets/img/icons8-noche-con-niebla-48.png')}
                    style={{ width: 62, height: 62, margin: 20 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 25
    },
    dayContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    todayText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    grades: {
        fontSize: 28,
        fontWeight: 'bold'
    }
});

export default Forecast;
