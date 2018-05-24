import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardListData from './CardDummyData.json';
import CardStack from './CardStack';
import Card from './common/Card';
import CardLoadMore from './common/CardLoadMore'


class Main extends Component {

    render() {
        return (
            <View style={styles.container}>
                <CardStack
                    cardListData={CardListData}
                    renderCard={this.renderCard}
                    renderLoadMoreCard={this.renderLoadMoreCard}
                >
                </CardStack>
            </View>
        );
    }

    renderCard(item) {
        return (
            <Card
                key={item.id}
                cardItem={item} />
        );
    }

    renderLoadMoreCard() {
        return (
            <CardLoadMore />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Main;