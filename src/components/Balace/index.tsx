import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export default function Balance() {
  return (
    <View className="flex-row justify-between bg-dtmoney-gray-50 rounded-md p-6 mx-6 -mt-14">
      <View className="flex-col gap-16">
        <Text className="font-medium text-sm text-dtmoney-gray-600">Entradas</Text>
        <View className="flex-col">
          <Text className="font-semibold text-3xl text-dtmoney-gray-700">R$ 17.400,00</Text>
          <Text className="text-xs text-dtmoney-gray-400">Última entrada dia 13 de abril</Text>
        </View>
      </View>
      <Icon name='arrow-up-circle' color={'#12A454'} size={40} />
    </View>
  );
}
