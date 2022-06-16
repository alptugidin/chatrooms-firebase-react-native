import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

const Popup = ({user, message, time}) => {
  return (
    <View style={style.main}>
      <View style={style.infoView}>
        <Text style={style.name}>{user}</Text>
        <Text style={style.time}>{time}</Text>
      </View>
      <View style={style.messageView}>
        <Text style={style.message}>{message}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 17,
  },

  time: {
    fontSize: 15,
    fontStyle: 'italic',
  },

  message: {
    fontSize: 17,
    color: colors.gray600,
  },
  messageView: {
    paddingVertical: 10,
  },
});

export default Popup;
