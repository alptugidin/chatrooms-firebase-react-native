import React, {createRef, useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Modal from 'react-native-modal';
import CustomButton from '../../components/Button/Button';
import {style} from './Modal.style';
import {colors} from '../../styles/colors';

const CustomModal = ({submit, close, visible}) => {
  const [input, setInput] = useState('');
  const handleOnPress = () => {
    submit(input);
  };
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={close}
      onSwipeComplete={close}
      onBackButtonPress={close}
      swipeDirection="down">
      <View style={style.parentMain}>
        <View style={style.main}>
          <TextInput
            autoFocus={true}
            style={style.input}
            placeholderTextColor={colors.gray500}
            placeholder="Oda Adı..."
            onChangeText={setInput}
            value={input}
          />
          <CustomButton title="Oluştur" onPress={handleOnPress} />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
