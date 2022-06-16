import React, {useEffect, useState} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Rooms from './pages/Rooms/Rooms';
import Room from './pages/Room/Room';
import {colors} from './styles/colors';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();

const SignStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitleAlign: 'center',
          headerTintColor: colors.orange600,
        }}
      />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

const RoomStacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rooms"
        component={Rooms}
        options={{
          headerTintColor: colors.orange400,
          headerRight: () => (
            <Icon.Button
              onPress={() => auth().signOut()}
              name="logout"
              backgroundColor={colors.orange400}
              size={20}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>logout</Text>
            </Icon.Button>
          ),
        }}
      />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [session, setSession] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setSession(!!user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!session ? (
          <Stack.Screen
            name="SignStacks"
            component={SignStacks}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="RoomStacks"
            component={RoomStacks}
            options={{
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
