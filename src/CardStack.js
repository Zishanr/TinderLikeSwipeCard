import React, { Component } from 'react';
import {
    View,
    Animated,
    Text,
    PanResponder,
    Dimensions,
    StyleSheet,
} from 'react-native';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_CARD_THRESHOLD = SCREEN_WIDTH * 0.25;
const SWIPE_OUT_SCREEN_DURATION = 250;

class CardStack extends Component {

    constructor(props) {
        super(props);

        const cardPosition = new Animated.ValueXY();

        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                cardPosition.setValue({ x: gesture.dx, y: gesture.dy })
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > SWIPE_CARD_THRESHOLD) {
                    this.swipeCardOffScreen('right');
                } else if (gesture.dx < -SWIPE_CARD_THRESHOLD) {
                    this.swipeCardOffScreen('left');
                } else {
                    this.resetCardPostion();
                }
            }
        });
        this.state = { panResponder, cardPosition, index: 0 };
    }

    render() {
        return (
            <View>
                {this.renderCards()}
            </View>
        );
    }

    // Rendering card view and adding PanResponder for user gesture and animation to animate card
    renderCards() {

        if (this.state.index >= this.props.cardListData.length) {
            return this.props.renderLoadMoreCard();
        }

        return this.props.cardListData.map((cardItem, i) => {

            if (i < this.state.index) {
                return null
            }

            if (i === this.state.index) {
                return (
                    <Animated.View
                        key={cardItem.id}
                        style={[this.getCardStyle(), styles.cardStyle]}
                        {...this.state.panResponder.panHandlers}>
                        {this.props.renderCard(cardItem)}
                    </Animated.View>
                );
            }

            return (
                <View
                    key={cardItem.id}
                    style={[styles.cardStyle, { top: 10 * (i - this.state.index) }]}>
                    {this.props.renderCard(cardItem)}
                </View>
            )

        }).reverse();
    }

    getCardStyle() {
        const { cardPosition } = this.state;
        const rotate = cardPosition.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        })
        return {
            ...cardPosition.getLayout(),
            transform: [{ rotate }]
        }
    }

    // Positioning back the card back to pervios position
    resetCardPostion() {
        Animated.spring(this.state.cardPosition, {
            toValue: { x: 0, y: 0 }
        }).start();
    }

    // Swiping the card off the screen either right or left 
    swipeCardOffScreen(swipeDirection) {
        const x = swipeDirection === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.cardPosition, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_SCREEN_DURATION
        }).start(() => this.onCardSwipeComplete());
    }

    onCardSwipeComplete() {
        this.state.cardPosition.setValue({ x: 0, y: 0 });
        this.setState({ index: this.state.index + 1 });
    }

}


const styles = StyleSheet.create({
    cardStyle: {
        position: 'absolute',
        width: SCREEN_WIDTH,
    }
});

export default CardStack;