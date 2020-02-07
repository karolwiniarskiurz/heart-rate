/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Router} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import {Scene} from 'react-native-router-flux';
import NavigationTabs from './components/NavigationTabs';
import routes from './routes';
import HeartView from './views/HeartView';
import HelpView from './views/HelpView';
import HistoryView from './views/HistoryView';
import MeasuringView from './views/MeasuringView';
import ResultsView from './views/ResultsView';

const App: () => React$Node = () => {
  Actions.replace(routes.Heart);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <Router>
          <Scene key="root">
            <Scene
              key="tabbar"
              tabs={true}
              tabBarComponent={NavigationTabs}
              hideNavBar>
              <Scene
                key={routes.Heart}
                component={HeartView}
                titleStyle="none"
                hideNavBar
              />
              <Scene
                key={routes.Help}
                component={HelpView}
                title="How to use application?"
              />
              <Scene
                key={routes.History}
                component={HistoryView}
                title="History"
              />
            </Scene>
            <Scene
              key={routes.Measuring}
              direction="vertical"
              component={MeasuringView}
              title="Modal"
              hideNavBar
            />
            <Scene
              key={routes.Results}
              direction="vertical"
              component={ResultsView}
              title="Modal"
              hideNavBar
            />
          </Scene>
        </Router>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    height: '100%',
  },
});

export default App;
