import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Rooms from './pages/Rooms/Rooms';
import Room from './pages/Room/Room';

const Stack = createNativeStackNavigator();

const SignStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const RoomStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Rooms" component={Rooms} />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="RoomStacks"
          component={RoomStacks}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignStacks"
          component={SignStacks}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
