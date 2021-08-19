import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Today = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.todayText}>Hoy</Text>
            <View style={styles.innerContainer}>
                <Image
                    source={require('../assets/img/icons8-sol-48.png')}
                    style={{ width: 62, height: 62 }}
                />
                <Image
                    source={require('../assets/img/icons8-parcialmente-nublado-lluvia-48.png')}
                    style={{ width: 62, height: 62 }}
                />
                <Image
                    source={require('../assets/img/icons8-noche-con-niebla-48.png')}
                    style={{ width: 62, height: 62 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 25
    },
    todayText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 43,
        marginLeft: 40
    },
    grades: {
        fontSize: 28,
        marginTop: 5,
        marginLeft: 20,
        fontWeight: 'bold'
    }
});

export default Today;
