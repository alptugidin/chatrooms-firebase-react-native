import React from 'react';
import style from './Button.style';
import {Text, TouchableHighlight} from 'react-native';
const CustomButton = ({title, onPress, type = 'primary'}) => {
  const handleOnPress = () => {
    onPress();
  };
  return (
    <TouchableHighlight
      underlayColor={'rgba(0,0,0,0.1)'}
      style={style[type]?.touch}
      onPress={handleOnPress}>
      <Text style={style[type]?.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

export default CustomButton;
