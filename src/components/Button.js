import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {CameraFilled} from '@ant-design/icons';

export function Camera() {
  return (
    <View>
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Icon name="videocamera" size={60} />
      </TouchableOpacity>
    </View>
  );
}

export function Ligar() {
  return (
    <View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
        }}>
        <Icon name="phone" size={40} color="green" />
        <Text style={{fontWeight: 'bold'}}>Ligar</Text>
      </TouchableOpacity>
    </View>
  );
}

export function Desligar() {
  return (
    <View>
      <TouchableOpacity style={{borderRadius: 50, alignItems: 'center'}}>
        <Icon name="closesquare" size={40} color="red" />
      </TouchableOpacity>
      <Text style={{fontWeight: 'bold'}}>Desligar</Text>
    </View>
  );
}
