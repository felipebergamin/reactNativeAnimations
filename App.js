import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const App = () => {
  const [ballY] = useState(new Animated.Value(0));
  const [ballX] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.stagger(300, [
      Animated.timing(ballY, {
        toValue: 500,
        duration: 1000,
      }),

      Animated.timing(ballX, {
        toValue: 300,
        duration: 1000,
      }),
    ]).start();
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
