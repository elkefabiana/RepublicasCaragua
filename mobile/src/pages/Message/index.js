import * as React from 'react';
import {Text, View, TextInput,ScrollView, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Message( {route, navigation} ) {
  const { republicName } = route.params;


  return (
<ScrollView >
  <Text>Bem vindo ao MEnsagens{republicName}</Text>
</ScrollView>

  )

}