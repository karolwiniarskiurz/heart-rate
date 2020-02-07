import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {StyleSheet, Text, View, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {primaryColor} from '../consts';
import {secondaryColor, accentColor} from '../consts';
import routes from '../routes';
import HistoryService from '../services/HistoryService';

class ResultsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: this.props.beats * 4,
    };
    this.historyService = new HistoryService();
  }

  async save() {
    await this.historyService.saveEntry(this.state.rate);
    Actions[routes.History]();
  }

  discard() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.text}>
          Your heart rate is{'\n'}
          <Text style={styles.heartRate}>{this.state.rate}</Text>
        </Text>
        <View style={styles.actions}>
          <TouchableWithoutFeedback onPress={this.save.bind(this)}>
            <View style={{...styles.button, ...styles.saveButton}}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.discard.bind(this)}>
            <View style={{...styles.button, ...styles.discardButton}}>
              <Text style={styles.buttonText}>Discard</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 20,
    fontSize: 30,
    textAlign: 'center',
  },
  actions: {
    flex: 0,
    flexDirection: 'row',
  },
  button: {
    margin: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 100,
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: accentColor,
  },
  discardButton: {
    backgroundColor: primaryColor,
  },
  buttonText: {
    textAlign: 'center',
  },
  heartRate: {
    fontSize: 80,
    fontWeight: 'bold',
    color: secondaryColor,
  },
});

export default ResultsView;
