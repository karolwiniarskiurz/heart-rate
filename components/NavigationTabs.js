import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {secondaryColor} from '../consts';
import routes from '../routes';
import {Vibration} from 'react-native';

const NavigationTabs = props => {
  return (
    <View style={styles.buttons}>
      <Icon
        name={'book'}
        size={40}
        color={secondaryColor}
        onPress={() => Actions[routes.History]()}
      />
      <Icon
        name={'favorite'}
        size={40}
        color={secondaryColor}
        onPress={() => Actions[routes.Heart]()}
      />
      <Icon
        name={'help'}
        size={40}
        color={secondaryColor}
        onPress={() => Actions[routes.Help]()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 64,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopEndRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomEndRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 30,
    paddingLeft: 30,
  },
});

export default NavigationTabs;
