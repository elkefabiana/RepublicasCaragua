import * as React from 'react';
import {Text, View, TextInput, Image, SafeAreaView, FlatList, TouchableHighlight } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import Separator from '../../components/Separator';

var messages = [
  { id: "01", name: "Republica 01", message:"Oi, tudo bem com você ?", primary: require('../../images/Users/daniel.jpg'), lastMessageTime:"23:30"  },
  { id: "02", name: "Republica 02", message:"Oi, tudo bem com você ?", primary: require('../../images/Users/daniel.jpg'), lastMessageTime:"23:30"  },
  { id: "03", name: "Republica 03", message:"Oi, tudo bem com você ?", primary: require('../../images/Users/daniel.jpg'), lastMessageTime:"23:30"  },
  { id: "04", name: "Republica 04", message:"Oi, tudo bem com você ?", primary: require('../../images/Users/daniel.jpg'), lastMessageTime:"23:30"  },
  { id: "05", name: "Republica 05", message:"Oi, tudo bem com você ?", primary: require('../../images/Users/daniel.jpg'), lastMessageTime:"23:30"  },
  { id: "06", name: "Republica 06", message:"Oi, tudo bem com você ?", primary: require('../../images/Users/daniel.jpg'), lastMessageTime:"23:30"  },
  { id: "07", name: "Republica 07", message:"Oi, tudo bem com você ?", primary: require('../../images/Users/daniel.jpg'), lastMessageTime:"23:30"  },
  { id: "08", name: "Republica 08", message:"Oi, tudo bem com você ?", primary: require('../../images/Users/daniel.jpg'), lastMessageTime:"23:30"  },
  { id: "09", name: "Republica 09", message:"Oi, tudo bem com você ?", primary: require('../../images/Users/daniel.jpg'), lastMessageTime:"23:30"  },
  { id: "10", name: "Republica 10", message:"Oi, tudo bem com você ?", primary: require('../../images/Users/daniel.jpg'), lastMessageTime:"23:30"  },
  { id: "11", name: "Republica 11", message:"Oi, tudo bem com você ?", primary: require('../../images/Users/daniel.jpg'), lastMessageTime:"23:30"  },
  { id: "12", name: "Republica 12", message:"Oi, tudo bem com você ?", primary: require('../../images/Users/daniel.jpg'), lastMessageTime:"23:30"  },
  { id: "13", name: "Republica 14", message:"Oi, tudo bem com você ?", primary: require('../../images/Users/daniel.jpg'), lastMessageTime:"23:30"  },

]


function Message({data, navigation}){

  return (
    <SafeAreaView style={styles.scrollView}>

    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => {
        function navigateToRepublicMessage(){
          navigation.navigate('Message',{
            republicId: item.id,
            republicName: item.name
          })
        }
        return (
          
          <TouchableHighlight onPress={navigateToRepublicMessage}>

  <View style={styles.MessageLine}>
  <View style={styles.MessageRepublicImage}><Image source={require('../../images/Users/daniel.jpg')} style={{width: '100%',height: '100%', borderRadius: 70,}}></Image></View>
  <View style={styles.MessageRepublic}>
  <View style={styles.TopMessage}>
  <Text style={styles.RepublicNameText}>{item.name}</Text>
  <Text style={styles.MessageTime}>23:30</Text>
  </View>
  <View style={styles.Message}><Text style={styles.MesssageText}>Oi tudo bem</Text></View>

  </View>
</View>
</TouchableHighlight>    

        );
      }}
    />
  </SafeAreaView>
  );
  
}

export default function ListMessages( {navigation} ) {

  return (
    <View>
<View style={styles.Navbar}>
<Separator space={10}/>

<View style={styles.container}>

<View style={styles.TopBar}>
<View style={styles.Search}>
<TextInput maxLength={40} style={styles.InputSearch} placeholder='Pesquise Pela Republica' />
</View>

</View>
</View>
</View>

<View style={styles.MessagesBackground}>
<View style={styles.container}>

<Message data={messages} navigation={navigation}  />

</View>
</View>

<Separator space={120}/>

</View>

)

}