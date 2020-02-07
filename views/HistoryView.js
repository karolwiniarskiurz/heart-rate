import React from 'react';
import {StyleSheet, Text, FlatList, View} from 'react-native';
import HistoryService from '../services/HistoryService';
import {format} from 'date-fns';

class HistoryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
    };
    this.historyService = new HistoryService();
    this.historyService.getAll().then(data => {
      console.log('getAll', data);
      this.setState({...this.state, records: data});
    });
  }

  render() {
    return (
      <FlatList
        data={this.state.records}
        renderItem={record => {
          const date = format(new Date(Number(record.item[0])), 'dd-MM-yyyy');
          const rate = JSON.parse(record.item[1]).rate;
          return (
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{date}</Text>
              <Text style={styles.listItemText}>{rate}</Text>
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  listItemText: {
    fontSize: 24,
  },
});

export default HistoryView;
