import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Splash_Screen from './src/Steps_App/splash_step';
import Login_Screen from './src/Steps_App/Login_step'


const App = () => {

  const [visable, setvisable] = React.useState(true)

  const Hide_splash = () => {
    setvisable(false)
  }
  const performconsuimingTask = async () => {
    setTimeout(() => {
      Hide_splash();
    }, 2000)
  }
  React.useEffect(() => {
    performconsuimingTask();
    setvisable(true)
  }, [])
  return (
    visable == true ? (
      <Splash_Screen />
    ) : (
      <Login_Screen />
    )

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
