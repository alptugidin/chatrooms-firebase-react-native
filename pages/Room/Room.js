import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {style} from './Room.style';
import Popup from '../../components/Popup/Popup';
import db from '@react-native-firebase/database';
import SendMessage from '../../components/SendMessage/SendMessage';
import auth from '@react-native-firebase/auth';
const Room = ({route}) => {
  const roomName = route.params;

  const [list, setList] = useState([]);

  useEffect(() => {
    const referance = db().ref(`rooms/${roomName}/messages/`);
    referance.once('value').then(snapshot => {
      const data = snapshot.val();
      setList(Object.values(data).reverse());
    });

    const activeDb = db()
      .ref(`rooms/${roomName}/messages/`)
      .on('value', snapshot => {
        const data = snapshot.val();
        setList(Object.values(data).reverse());
      });

    return () => db().ref(`rooms/${roomName}/messages/`).off('value', activeDb);
  }, []);

  const sendMessage = value => {
    const newReferance = db().ref(`rooms/${roomName}/messages`).push();
    newReferance
      .set({
        from: auth().currentUser.email,
        message: value,
        time: new Date().toLocaleTimeString('tr-TR', {
          timeZone: 'Europe/Istanbul',
        }),
      })
      .then(() => {
        console.log('success');
      })
      .catch(err => {
        console.log('ERROR: ' + err);
      });
  };

  const renderItem = item => {
    return <Popup user={item.from} time={item.time} message={item.message} />;
  };

  return (
    <View style={style.main}>
      <FlatList data={list} renderItem={({item}) => renderItem(item)} />
      <SendMessage onPress={sendMessage} />
    </View>
  );
};

export default Room;
