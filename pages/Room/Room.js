import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {style} from './Room.style';
import Popup from '../../components/Popup/Popup';
import db from '@react-native-firebase/database';
import SendMessage from '../../components/SendMessage/SendMessage';
import auth from '@react-native-firebase/auth';
import Loading from '../../components/Loading/Loading';

const Room = ({route}) => {
  const roomName = route.params;
  const [user, setUser] = useState('');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  auth()
    .currentUser.reload()
    .then(() => {
      setUser(auth().currentUser.email);
    });

  useEffect(() => {
    const activeDb = db()
      .ref(`rooms/${roomName}/messages/`)
      .on('value', snapshot => {
        const data = snapshot.val();
        const messageArray = [...Object.values(data)];
        messageArray.sort((a, b) => new Date(a.time) - new Date(b.time));
        setList(messageArray);
        setLoading(false);
      });

    return () => db().ref(`rooms/${roomName}/messages/`).off('value', activeDb);
  }, [roomName]);

  const sendMessage = value => {
    const newReferance = db().ref(`rooms/${roomName}/messages`).push();

    newReferance
      .set({
        from: user,
        message: value,
        time: new Date().toString(),
      })
      .then(() => {
        console.log('SUCCESS');
      })
      .catch(err => {
        console.log('ERROR: ' + err);
      });
  };

  const renderItem = item => {
    return (
      item.from !== 'system' && (
        <Popup
          user={item.from}
          currentUser={user}
          time={item.time}
          message={item.message}
        />
      )
    );
  };

  let flatListRef = null;
  return (
    <View style={style.main}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FlatList
            ref={ref => (flatListRef = ref)}
            onContentSizeChange={() =>
              flatListRef.scrollToEnd({animated: false})
            }
            data={list}
            renderItem={({item}) => renderItem(item)}
          />
          <SendMessage onPress={sendMessage} />
        </>
      )}
    </View>
  );
};

export default Room;
