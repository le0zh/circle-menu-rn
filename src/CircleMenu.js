import React from 'react';
import { Animated, Easing, StyleSheet, Text, View, ToastAndroid, Dimensions } from 'react-native';

import CircleButton from './CircleButton';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const width = 60 * 5 + 10 * 5;

const AnimatedCircleButton = Animated.createAnimatedComponent(CircleButton);

export default class CircleMenu extends React.Component {
  constructor() {
    super();

    this.left = new Animated.Value(width / 2 - 30);
    this.shown = false;
  }

  _toggleMenus = () => {
    if (this.shown) {
      Animated.timing(this.left, {
        toValue: width / 2 - 30,
        duration: 300,
        easing: Easing.inOut(Easing.cubic),
      }).start(() => {
        //this.shown = false;
      });
      this.shown = false;
    } else {
      Animated.spring(this.left, {
        toValue: width / 2 - 30 + 60 + 10,
        bounciness: 14,
        // friction: 7,
        // tension: 30,
      }).start(() => {
        // this.shown = true;
      });
      this.shown = true;
    }
  };

  render() {
    const opacityAnimation = this.left.interpolate({
      inputRange: [width / 2 - 30, width / 2 - 30 + 60 + 10],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    // opacity: opacityAnimation

    const left2 = this.left.interpolate({
      inputRange: [width / 2 - 30, width / 2 - 30 + 60 + 10],
      outputRange: [width / 2 - 30, width / 2 - 30 + 120 + 20],
      extrapolate: 'clamp',
    });

    const left3 = this.left.interpolate({
      inputRange: [width / 2 - 30, width / 2 - 30 + 60 + 10],
      outputRange: [width / 2 - 30, width / 2 - 30 - 60 - 10],
      extrapolate: 'clamp',
    });

    const left4 = this.left.interpolate({
      inputRange: [width / 2 - 30, width / 2 - 30 + 60 + 10],
      outputRange: [width / 2 - 30, width / 2 - 30 - 120 - 20],
      extrapolate: 'clamp',
    });

    const item1Style = [styles.item, { opacity: opacityAnimation, left: this.left }];

    const item2Style = [styles.item, { opacity: opacityAnimation, left: left2 }];

    const item3Style = [styles.item, { opacity: opacityAnimation, left: left3 }];
    const item4Style = [styles.item, { opacity: opacityAnimation, left: left4 }];

    return (
      <View style={styles.btnWrapper}>
        <AnimatedCircleButton style={item1Style} color="#8e24aa" />
        <AnimatedCircleButton style={item2Style} color="#00e676" />

        <AnimatedCircleButton style={item3Style} color="#ffa000" />
        <AnimatedCircleButton style={item4Style} color="#40c4ff" />

        <CircleButton style={styles.item} color="#F0A28E" onPress={this._toggleMenus} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnWrapper: {
    height: 60,
    width: width,
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    left: (screenWidth - width) / 2,
    bottom: screenHeight / 2 - 30,
    backgroundColor: 'transparent',
  },

  item: {
    position: 'absolute',
    left: width / 2 - 30,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
