import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const App = () => {
  const [ballY] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(ballY, {
      toValue: 300,
      duration: 3000,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.ball,
          {
            top: ballY,
            opacity: ballY.interpolate({
              inputRange: [0, 150, 300],
              outputRange: [1, 1, 0],
            }),
          },
        ]}
      />
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
