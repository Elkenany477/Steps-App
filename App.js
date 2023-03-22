import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';




const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.HandeText}> Come Back to Realse my frist App</Text>
    </View>

  )
}


export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center"
  },
  HandeText: {
    fontSize: 25,
    color: "#000",
    textAlign: "center"
  }
})


































{/*const App = () => {

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
*/}