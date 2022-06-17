import React, {useEffect} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import style from './Login.style';
import {Formik} from 'formik';
import Input from '../../components/Input/Input';
import CustomButton from '../../components/Button/Button';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const toRegister = () => {
    navigation.navigate('Register');
  };
  const formikSubmit = formValues => {
    auth()
      .signInWithEmailAndPassword(formValues.username, formValues.password)
      .then(() => {
        console.log('ok');
      })
      .catch(err => {
        Alert.alert(err.message);
        console.log(err.message);
      });
  };
  const initialFormValues = {
    username: '',
    password: '',
  };

  return (
    <ScrollView style={style.main}>
      <View style={style.headerView}>
        <Text style={style.headerText}>codetalks</Text>
      </View>
      <Formik initialValues={initialFormValues} onSubmit={formikSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <View style={style.inputView}>
              <Input
                placeholder="Mail..."
                value={values.username}
                onType={handleChange('username')}
              />
              <Input
                placeholder="Password..."
                value={values.password}
                onType={handleChange('password')}
              />
            </View>
            <View style={style.buttonView}>
              <CustomButton title="Login" onPress={handleSubmit} />
              <CustomButton
                title="Sign up"
                type="secondary"
                onPress={toRegister}
              />
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default Login;
