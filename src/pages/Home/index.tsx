import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Balance from '../../components/Balace';
import Moviments from '../../components/Moviments';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex-1 bg-dtmoney-gray-200">
      <Header />
      <Balance />
      <Moviments />
      <Modal animationType="slide" transparent={true} visible={true}>
        <View className="flex-1 justify-end bg-dtmoney-gray-950/30">
          <View className="bg-dtmoney-gray-50 p-6">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="font-medium text-xl">Cadastrar Transação</Text>
              <TouchableOpacity className="">
                <Icon name={'close'} size={20} />
              </TouchableOpacity>
            </View>
            <View className="">
              <TextInput
                className="border-2 border-dtmoney-gray-700/10 bg-dtmoney-gray-300/20 rounded-md px-4"
                placeholder="Nome"
                placeholderTextColor={'#1919'}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
