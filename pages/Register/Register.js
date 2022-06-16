import React from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import style from './Register.style';
import {Formik} from 'formik';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/Button';
import auth from '@react-native-firebase/auth';

const initialFormikValues = {
  username: '',
  password: '',
  repassword: '',
};

const Register = ({navigation}) => {
  const toLogin = () => {
    navigation.navigate('Login');
  };

  const formikSubmit = values => {
    if (values.password !== values.repassword) {
      Alert.alert('Şifreler eşleşmiyor!');
    } else {
      auth()
        .createUserWithEmailAndPassword(values.username, values.password)
        .then(() => {
          console.log('Success');
        })
        .catch(err => {
          console.log(err.message);
          Alert.alert(err.message);
        });
    }
  };
  return (
    <ScrollView style={style.main}>
      <View style={style.headerView}>
        <Text style={style.headerText}>codetalks</Text>
      </View>
      <Formik initialValues={initialFormikValues} onSubmit={formikSubmit}>
        {({values, handleSubmit, handleChange}) => (
          <>
            <View style={style.inputView}>
              <Input
                value={values.username}
                onType={handleChange('username')}
                placeholder="User Name..."
              />
              <Input
                value={values.password}
                onType={handleChange('password')}
                placeholder="Password..."
              />
              <Input
                value={values.repassword}
                onType={handleChange('repassword')}
                placeholder="Password again..."
              />
            </View>
            <View style={style.buttonView}>
              <CustomButton title="Kayıt Ol" onPress={handleSubmit} />
              <CustomButton title="Geri" type="secondary" onPress={toLogin} />
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default Register;
