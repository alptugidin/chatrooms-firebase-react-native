import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {style} from './Rooms.style';
import RoomCard from '../../components/RoomCard/RoomCard';
import PlusButton from '../../components/PlusButton';
import CustomModal from '../../components/Modal/Modal';
import db from '@react-native-firebase/database';

const Rooms = ({navigation}) => {
  const [rooms, setRooms] = useState([]);

  const [roomName, setRoomName] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const referance = db().ref('rooms/');
    referance.once('value').then(snapshot => {
      const data = snapshot.val();
      console.log(Object.keys(data));
      setRooms(Object.keys(data));
    });

    const activeDb = db()
      .ref('rooms/')
      .on('value', snapshot => {
        setRooms(Object.keys(snapshot.val()));
      });

    return () => db().ref('rooms/').off('value', activeDb);
  }, []);

  const createRoom = lang => {
    console.log(lang);
    db().ref('rooms').child(lang).set('messages');
    // const newReferance = db().ref('rooms/').push();
    // newReferance
    //   .set('ss')
    //   .then(() => {
    //     console.log('ok');
    //     setModalVisible(false);
    //   })
    //   .catch(err => {
    //     console.log('ERROR: ' + err);
    //   });
  };

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={style.main}>
      {rooms.map((roomName, index) => (
        <RoomCard nav={navigation} roomName={roomName} key={index} />
      ))}
      <CustomModal visible={modalVisible} submit={createRoom} />
      <PlusButton handleOnPress={openModal} />
    </View>
  );
};

export default Rooms;
