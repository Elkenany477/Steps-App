import * as React from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';

const Splash_Screen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../images/background.png')}
        resizeMode="stretch"
        style={styles.up_image}>
        <Image
          source={require('../../images/logo1.png')}
          style={styles.low_image}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  up_image: {
    flex: 1,
    justifyContent: 'center',
  },
  low_image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
});

export default Splash_Screen;
