import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Card = ({ cardItem }) => {
    return (
        <View style={styles.cardStyle}>
            <Text style={styles.cardHeader}>{cardItem.text}</Text>

            <View style={styles.cardDescriptionConatiner}>
                <Text style={styles.cardDescriptionText}>I can customize the card further.</Text>
            </View>
            <Text style={styles.viewMore}>View Now!</Text>
        </View>
    );
}



const styles = StyleSheet.create({
    cardStyle: {
        height: 350,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 40,
        backgroundColor: 'white'
    },
    cardHeader: {
        flex: 1, marginTop: 20, fontSize: 20
    },
    cardDescriptionConatiner: {
        alignSelf: 'flex-start',
        marginBottom: 15,
        paddingStart: 15,
    },
    cardDescriptionText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    viewMore: {
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'orange'
    }
});

export default Card;