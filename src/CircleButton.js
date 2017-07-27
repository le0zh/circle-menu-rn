import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

export default class CircleButton extends React.Component {
  constructor() {
    super();
  }

  render() {
    const btnStyle = [styles.btn, { backgroundColor: this.props.color }];

    // TODO: ios不支持TouchableNativeFeedback
    return (
      <View style={[btnStyle, this.props.style]}>
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#AAF', true)} onPress={this.props.onPress}>
          <View style={styles.btn} />
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});

// CircleMenu菜单按钮和菜单默认背景颜色
// @CircleMenuBtnColor: #F0A28E;
// @CircleMenuItem1Color: #8e24aa;
// @CircleMenuItem2Color: #00e676;
// @CircleMenuItem3Color: #ffa000;
// @CircleMenuItem4Color: #40c4ff;
