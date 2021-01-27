import React from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';
import Analytics from 'appcenter-analytics';
import Crash from 'appcenter-crashes';

export default class App extends React.Component {
  constructor() {
    super();

    this.checkPreviousSession();
  }

  async checkPreviousSession() {
    const didCrash = await Crash.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crash.lastSessionCrashReport();
      // Alert.alert("Sorry about that crash, we're workking on a solution!");
    }
  }
  render() {
    return (
      <View style={styles.continer}>
        <Button
          title="Calculate"
          onPress={() => Analytics.trackEvent('calculate_inflation')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  continer: {
    padding: 20,
  },
});
