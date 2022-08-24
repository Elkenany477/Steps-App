import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Splash_Screen from './src/Steps_App/splash_step';

const App = () => {
  return (
    <View style={styles.container}>
      <Splash_Screen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
