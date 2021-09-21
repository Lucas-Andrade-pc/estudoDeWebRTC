import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {joinRoom} from './store/actions/videoActions';
import {connect, Provider} from 'react-redux';
import {Camera, Ligar, Desligar} from './components/Button';
import store from './store/index';
import {useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import login from './components/pages/login/Login';
import callScreens from './components/pages/callScreens/callSreens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="Call" component={callScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
