import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {colors} from '../styles/colors';

const PlusButton = ({handleOnPress}) => {
  return (
    <TouchableHighlight
      underlayColor={colors.orange600}
      onPress={handleOnPress}
      style={style.main}>
      <Text style={style.text}>+</Text>
    </TouchableHighlight>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    width: 50,
    height: 50,
    backgroundColor: colors.orange400,
    position: 'absolute',
    bottom: 15,
    right: 15,
    borderRadius: 25,
  },
  text: {
    lineHeight: 55,
    textAlign: 'center',
    color: 'white',
    fontSize: 50,
    fontWeight: '300',
  },
});

export default PlusButton;
