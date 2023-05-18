import {View, Text, FlatList} from 'react-native';
import React from 'react';

export default function Moviments() {
  const list = [
    {
      id: 1,
      name: 'Desenvolvimento de site',
      valor: 'R$ 12.000,00',
      categoria: 'Vendas',
      data: '10/04/2023',
      moviment: 'gasto',
    },
    {
      id: 2,
      name: 'Desenvolvimento de site',
      valor: 'R$ 2.000,00',
      categoria: 'Vendas',
      data: '10/04/2023',
      moviment: 'gasto',
    },
    {
      id: 3,
      name: 'Desenvolvimento de site',
      valor: 'R$ 120,00',
      categoria: 'Alimentação',
      data: '10/04/2023',
      moviment: 'gasto',
    },
    {
      id: 4,
      name: 'Desenvolvimento de site',
      valor: 'R$ 1.000,00',
      categoria: 'Casa',
      data: '10/04/2023',
      moviment: 'receita',
    },
  ];

  return (
    <View className="flex-1 flex-col px-6 mt-8">
      <View className="flex-row items-center justify-between">
        <Text className="font-medium text-2xl text-dtmoney-gray-700">
          Listagem
        </Text>
        <Text className="font-bold text-dtmoney-gray-400">4 itens</Text>
      </View>

      <FlatList
        data={list}
        renderItem={({item}) => (
          <View className="p-6 mt-6 bg-dtmoney-gray-50 rounded-md">
            <View className="flex-col">
              <Text className="text-base text-dtmoney-gray-700 font-semibold">
                {item.name}
              </Text>
              <Text className="text-2xl text-dtmoney-green-500 font-medium">
                {item.valor}
              </Text>
            </View>
            <View className="flex-row justify-between items-center mt-6">
              <Text className="text-dtmoney-gray-400 font-bold">categoria</Text>
              <Text className="text-dtmoney-gray-400 font-bold">
                {item.data}
              </Text>
            </View>
          </View>
        )}
      />
      {/* END FLATLIST */}
    </View>
  );
}
