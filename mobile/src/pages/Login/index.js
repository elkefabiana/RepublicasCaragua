import * as React from 'react';
import {Text, View, TextInput,ScrollView, ImageBackground, TouchableHighlight } from 'react-native';
import styles from './style';

export default function Login( {navigation} ) {

  return (
    <ScrollView style={styles.scrollView}>

    <View style={styles.TopLogin}>
    <ImageBackground
    source={require('../../images/estudantes.jpg')}
    style={styles.TopImageLogin}
    imageStyle={{
    }}
>
</ImageBackground>
    </View>
    <View style={styles.container} >

    <View style={styles.GroupLogin}>
    <View style={styles.GroupLoginContainer}>
    <Text style={styles.TextWelcome}>Seja Bem vindo,</Text>
    <Text style={styles.textNormal}>Você está no CaraguaREP's 2.0</Text>
    <TextInput
    maxLength={40}
    style={styles.Input}
    placeholder='Digite seu email aqui'
    type="email"
  />        
    <TextInput
    maxLength={40}
    style={styles.Input}
    placeholder='Digite sua senha'
    type="password"
    secureTextEntry
    autoCorrect={false}

  />

  <TouchableHighlight
  style={styles.Button}>
    <Text style={styles.TextLoginButton} onPress={ ()=> navigation.navigate('Home') }>Login</Text>
    
</TouchableHighlight>

<TouchableHighlight
  style={styles.Button}>
    <Text style={styles.TextAlternativeButton}>Esqueci a Senha</Text>
</TouchableHighlight>
<TouchableHighlight
  style={styles.Button}>
    <Text style={styles.TextAlternativeButton}>Sou Novo Aqui!</Text>
</TouchableHighlight>

</View>
      </View>
  </View>
</ScrollView>
  );

}