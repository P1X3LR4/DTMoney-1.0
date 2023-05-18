import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Balance from '../../components/Balace';
import Moviments from '../../components/Moviments';
import Icon from 'react-native-vector-icons/AntDesign';
import ModalInput from '../../components/Modal';

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex-1 bg-dtmoney-gray-200">
      <Header />
      <Balance />
      <Moviments />
      <ModalInput />
    </View>
  );
}
