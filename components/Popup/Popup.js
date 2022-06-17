import React from 'react';
import {Text, View} from 'react-native';
import style from './Popup.style';

const Popup = ({user, message, time, currentUser}) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
  const day = days[new Date(time).getDay()];
  const from = currentUser === user ? 'send' : 'receive';
  const timeStamp = day + ' ' + new Date(time).toLocaleTimeString();
  return (
    <View style={style[from].main}>
      <View style={style[from].infoView}>
        <Text style={style[from].name}>~{user}~</Text>
      </View>
      <View style={style[from].messageView}>
        <Text style={style[from].message}>{message}</Text>
      </View>
      <View style={style[from].timeView}>
        <Text style={style[from].time}>{timeStamp}</Text>
      </View>
    </View>
  );
};

export default Popup;
