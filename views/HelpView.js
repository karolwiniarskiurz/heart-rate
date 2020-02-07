import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  ScrollView,
} from 'react-native';

const HelpView = () => {
  const steps = [
    {
      id: 0,
      text:
        'Hold out one arm, palm up. Gently press your index finger and middle fingers to the inside of your wrist between the bone and tendon near your radial artery.',
    },
    {
      id: 1,
      text:
        'This will be approximately one inch below your wrist on the same side as your thumb.',
    },
    {
      id: 2,
      text:
        'You should feel soft tissue beneath your fingers, not bone. You may need to move your fingers around or press slightly harder until you feel it.',
    },
    {
      id: 3,
      text: 'Launch the application and press "Measure your heart rate!"',
    },
    {
      id: 4,
      text: 'Every time you feel pulse tap the heart.',
    },
  ];
  return (
    <ScrollView>
      <Image
        style={styles.image}
        source={require('../resources/img/heart-measure.jpg')}
      />
      <FlatList
        style={styles.list}
        data={steps}
        renderItem={record => {
          const step = record.item;
          const index = record.index;
          return (
            <View style={styles.listItem}>
              <Text style={{...styles.listText, ...styles.listBullet}}>
                {index + 1}.{' '}
              </Text>
              <Text style={{...styles.listText, ...styles.listDescription}}>
                {step.text}
              </Text>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 20,
    marginBottom: 70,
  },
  image: {
    width: 420,
    height: 200,
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  listText: {
    fontSize: 20,
  },
  listBullet: {},
  listDescription: {
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default HelpView;
