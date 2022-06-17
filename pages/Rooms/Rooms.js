import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {style} from './Rooms.style';
import RoomCard from '../../components/RoomCard/RoomCard';
import PlusButton from '../../components/PlusButton';
import CustomModal from '../../components/Modal/Modal';
import db from '@react-native-firebase/database';
import Loading from '../../components/Loading/Loading';

const Rooms = ({navigation}) => {
  const [rooms, setRooms] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const activeDb = db()
      .ref('rooms/')
      .on('value', snapshot => {
        setRooms(Object.keys(snapshot.val()));
        setLoading(false);
      });

    return () => db().ref('rooms/').off('value', activeDb);
  }, []);

  const createRoom = lang => {
    db()
      .ref('rooms')
      .child(lang)
      .set({
        messages: {
          [db().ref('rooms').push().key]: {
            from: 'system',
            message: 'first',
            time: Date().toString(),
          },
        },
      })
      .then(() => {
        setModalVisible(false);
      });
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const renderItem = item => {
    return <RoomCard nav={navigation} roomName={item} />;
  };

  return (
    <View style={style.main}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={rooms}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-evenly',
          }}
          renderItem={({item, index}) => renderItem(item, index)}
        />
      )}
      <CustomModal visible={modalVisible} submit={createRoom} />
      <PlusButton handleOnPress={openModal} />
    </View>
  );
};

export default Rooms;
