import React from 'react';
import {TextInput, View} from 'react-native';
import style from './Input.style';
const Input = ({placeholder, value, onType}) => {
  return (
    <TextInput
      style={style.input}
      placeholder={placeholder}
      placeholderTextColor="white"
      onChangeText={onType}
      value={value}
    />
  );
};

export default Input;
