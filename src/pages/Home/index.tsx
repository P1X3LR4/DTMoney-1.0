import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Balance from '../../components/Balace';
import Moviments from '../../components/Moviments';

export default function Home() {
  return (
    <View className="flex-1 bg-dtmoney-gray-200">
      <Header />
      <Balance />
      <Moviments />
    </View>
  );
}
