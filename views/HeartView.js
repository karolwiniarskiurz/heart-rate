import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Heart from '../components/Heart';
import {primaryColor} from '../consts';
import routes from '../routes';

class HeartView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startButtonPressed: false,
    };
  }

  onStartButtonPress() {
    Actions[routes.Measuring]();
  }

  render() {
    return (
      <View style={styles.main}>
        <Heart animate={false} />
        <TouchableWithoutFeedback
          style={styles.startButton}
          onPress={this.onStartButtonPress.bind(this)}>
          <View style={styles.startButton}>
            <Text>Measure your heart rate!</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  startButton: {
    backgroundColor: primaryColor,
    paddingVertical: 10,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default HeartView;
