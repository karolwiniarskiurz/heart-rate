import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Heart from '../components/Heart';

class MeasuringView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Tap when you feel your heart beat',
      countdown: 3,
      timeLeft: 15,
      beats: 0,
    };
  }

  componentDidMount(): void {
    this.setCountdown();
  }

  setCountdown() {
    const interval = setInterval(() => {
      this.setState({...this.state, countdown: this.state.countdown - 1});
      if (this.state.countdown === 0) {
        clearInterval(interval);
        this.startCounting();
      }
    }, 1000);
  }

  startCounting() {
    const interval = setInterval(() => {
      this.setState({...this.state, timeLeft: this.state.timeLeft - 1});
      if (this.state.timeLeft === 0) {
        clearInterval(interval);
        alert(this.state.beats);
      }
    }, 1000);
  }

  handleOnHeartPress() {
    this.setState({...this.state, beats: this.state.beats + 1});
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.textView}>
          {this.state.countdown || this.state.text}
        </Text>
        <View style={styles.heartView}>
          <Heart animate={true} onPress={this.handleOnHeartPress.bind(this)} />
        </View>
        {this.state.countdown === 0 && (
          <Text style={styles.textView}>{this.state.timeLeft}s</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: 'relative',
    justifyContent: 'space-between',
  },
  textView: {
    flex: 0,
    textAlign: 'center',
    fontSize: 28,
    paddingVertical: 30,
    zIndex: 1,
  },
  heartView: {
    position: 'absolute',
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MeasuringView;
