import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {style} from './SendMessage.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SendMessage = ({onPress}) => {
  const [input, setInput] = useState('');
  const handlePress = () => {
    onPress(input);
    setInput('');
  };
  return (
    <View style={style.main}>
      <View style={style.inputView}>
        <TextInput
          value={input}
          onChangeText={setInput}
          style={style.input}
          multiline={true}
        />
      </View>
      <View style={style.iconView}>
        <Icon.Button
          name="send"
          borderRadius={99}
          size={30}
          iconStyle={{marginLeft: 0, marginRight: 0}}
          onPress={handlePress}
        />
      </View>
    </View>
  );
};

export default SendMessage;
