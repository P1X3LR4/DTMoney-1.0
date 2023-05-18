import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View className="flex-row bg-dtmoney-purple-700 pt-6 px-4 pb-20">
      <View className="flex-1 flex-row justify-between items-center">
        <Image source={require('../../images/logo.png')}/>
        <TouchableOpacity className="bg-dtmoney-purple-500 rounded items-center justify-center px-4 py-3">
          <Text className="font-bold text-dtmoney-gray-50">Nova Transação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
