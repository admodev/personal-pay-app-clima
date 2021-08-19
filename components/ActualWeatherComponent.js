import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ActualWeatherComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.cityText}>Buenos Aires</Text>
                <Text style={styles.grades}>12 °C</Text>
                <Text style={styles.weatherType}>Soleado</Text>
            </View>
            <Image
                source={require('../assets/img/icons8-sol-48.png')}
                style={{
                    width: 82,
                    height: 82,
                    marginTop: 80,
                    marginRight: 50
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 322,
        height: 266,
        display: 'flex',
        flexDirection: 'row',
        borderBottomRightRadius: 8,
        backgroundColor: '#FF3366'
    },
    innerContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 15
    },
    cityText: {
        fontSize: 24,
        marginTop: 43,
        marginLeft: 20
    },
    grades: {
        fontSize: 28,
        marginTop: 5,
        marginLeft: 20,
        fontWeight: 'bold'
    },
    weatherType: {
        fontSize: 20,
        marginTop: 2,
        marginLeft: 20
    }
});

export default ActualWeatherComponent;
