import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const App = () => {
  const [ballY, setBallY] = useState(new Animated.Value(0));
  const [ballX] = useState(Animated.divide(ballY, 2));

  useEffect(() => {
    /*
    Animated.timing(ballY, {
      toValue: 500,
      duration: 3000,
    }).start();
    */

    /*
    Animated.spring(ballY, {
      toValue: 500,
      bounciness: 20,
    }).start();
    */

    Animated.decay(ballY, {
      velocity: 1,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, {top: ballY, left: ballX}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'red',
  },
});

export default App;
