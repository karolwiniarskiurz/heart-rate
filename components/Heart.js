import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Animated} from 'react-native';
import {Vibration} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {secondaryColor} from '../consts';

export default class Heart extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(1);
  }

  handleIconPressIn() {
    if (!this.props.animate) {
      return;
    }
    Vibration.vibrate(100);
    Animated.spring(this.animatedValue, {
      toValue: 1.2,
    }).start();
  }

  handleIconPressOut() {
    if (!this.props.animate) {
      return;
    }
    Animated.spring(this.animatedValue, {
      toValue: 1,
    }).start();
  }

  handleOnPress(event) {
    if (this.props.onPress) {
      this.props.onPress(event);
    }
  }

  render() {
    const animatedStyle = {
      transform: [{scale: this.animatedValue}],
    };
    return (
      <TouchableWithoutFeedback
        onPressIn={this.handleIconPressIn.bind(this)}
        onPressOut={this.handleIconPressOut.bind(this)}
        onPress={this.handleOnPress.bind(this)}>
        <Animated.View style={animatedStyle}>
          <Icon name={'favorite'} size={160} color={secondaryColor} />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
