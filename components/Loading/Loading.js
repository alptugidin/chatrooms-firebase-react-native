import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <AnimatedLottieView
      source={require('../../assets/57498-waiting-pendulum.json')}
      autoPlay
    />
  );
};

export default Loading;
