import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const CardLoadMore = () => {
    return (
        <View style={styles.cardLoadMoreStyle}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.headerText}>All Done</Text>
            </View>

            <View style={styles.divider} />

            <Text style={styles.cardDeacription}>There's no more content here!</Text>

            <Text style={styles.textGetMore}>Get More!</Text>

        </View>
    );
}


const styles = StyleSheet.create({
    cardLoadMoreStyle: {
        height: 150,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
        backgroundColor: 'white'

    },
    divider: {
        borderWidth: 0.5,
        borderBottomColor: '#ddd',
        margin: 15
    },
    headerText: {
        marginTop: 20,
        fontSize: 20
    },
    cardDeacription: {
        fontSize: 15,
        padding: 10
    },
    textGetMore: {
        fontSize: 20,
        color: 'blue',
        alignSelf: 'center'
    }
});

export default CardLoadMore;