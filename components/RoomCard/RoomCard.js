import React, {useEffect} from 'react';
import {style} from './RoomCard.style';
import {Text, TouchableHighlight, View} from 'react-native';
import {colors} from '../../styles/colors';
import db from '@react-native-firebase/database';
const RoomCard = ({roomName, nav}) => {
  const handlePress = () => {
    nav.navigate('Room', roomName);
  };

  useEffect(() => {}, []);

  return (
    <TouchableHighlight
      underlayColor={colors.gray100}
      onPress={handlePress}
      style={style.main}>
      <Text style={style.text}>{roomName}</Text>
    </TouchableHighlight>
  );
};

export default RoomCard;
