/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather'

export default function App(){

  return (
    <View className='flex-1 bg-zinc-800 items-center justify-center'>
      <Icon name='plus' size={96} color={'#fff'} />
    </View>
  );
}