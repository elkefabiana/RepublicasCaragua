import * as React from 'react';
import {Text, View, ScrollView, TouchableHighlight } from 'react-native';
import styles from './style';
import { SliderBox } from "react-native-image-slider-box";
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'react-native-elements'
import { CheckBox } from 'react-native-elements'
import Separator from '../../components/Separator';



var infoRepublic = {
  title: 'Republica do povo',
  description: 'teste',
  republic_like: '',
  rules: '',
  address:'',
  republic_person_perfil: '',
  contact: '',
  capacity: '',
  quantidy_bedroom: '',
  quantidy_bathroom: '',
  rules: '',

  images: [
    require('../../images/RepublicList/RepublicExample2.jpg'),
    require('../../images/RepublicList/RepublicExample3.jpg'),
    require('../../images/RepublicList/RepublicExample4.jpg'),
    ]

}


export default function Republic( {navigation} ) {

  return (
    <View>
<ScrollView>
  <View>
<SliderBox
  images={infoRepublic.images}
  sliderBoxHeight={280}
  ImageComponentStyle={{borderBottomLeftRadius: 24, borderBottomRightRadius: 24}}
/>
</View>
 <View style={styles.container}>

<View style={styles.TopInfo} >  

<View style={styles.Title}>
<Text style={styles.TitleText}>Republica de Exemplo</Text>
</View>

<View style={styles.RepublicLike}>
<Text style={styles.RepublicLikeText}>Feminina</Text>
</View>

</View>


<View style={styles.section}>
  
<View style={styles.Icons}>
<View style={styles.Icon}><IconFontAwesome name="bed" size={30} color="#BCBDC7" /><Text style={styles.TextIcons}>9 Quartos</Text></View>
<View style={styles.Icon}><IconMaterial name="person" size={30} color="#BCBDC7" /><Text style={styles.TextIcons}>7 Vagas</Text></View>
<View style={styles.Icon}><IconFontAwesome name="shower" size={30} color="#BCBDC7" /><Text style={styles.TextIcons}>2 Banheiros</Text></View>
<View style={styles.Icon}><IconMaterial name="directions-car" size={30} color="#BCBDC7" /><Text style={styles.TextIcons}>1 Garagem</Text></View>
</View>
</View>








<View style={styles.section}>
<Text style={styles.SubTitleText}>Descrição</Text>
<Text style={styles.description}>Quartos grandes com ar condicionado, camas de casal. Duas salas, uma de estudo com mesa de vidro para 8 pessoas. Duas cozinhas com fogão geladeira, panelas, pratos.
Área de serviço com tanque e máquina de lavar. Piscina.
Rep apenas para meninas, bairro populoso sem perigo, rua próxima a feira de quinta e domingo, supermercado</Text>
</View>




<View style={styles.section}>
<Text style={styles.SubTitleText}>Comodidades</Text>
<View style={styles.Comfort}>
<View style={styles.HalfSection}>
<CheckBox
  title='Wi-fi'
   size={18}
  containerStyle={styles.CheckBoxContainer}
  textStyle={{fontSize: 10, }}
  checked={true}
/><CheckBox
  title='Piscina'
   size={18}
  containerStyle={styles.CheckBoxContainer}
  textStyle={{fontSize: 10,}}
  checked={true}
/>
<CheckBox
  title='Suite'
   size={18}
  containerStyle={styles.CheckBoxContainer}
  textStyle={{fontSize: 10,}}
  checked={true}
/>
  </View>
<View style={styles.HalfSection}>
<CheckBox
  title='Condominio'
   size={18}
  containerStyle={styles.CheckBoxContainer}
  textStyle={{fontSize: 10,}}
  checked={true}
/><CheckBox
  title='Contas Inclusas'
   size={18}
  containerStyle={styles.CheckBoxContainer}
  textStyle={{fontSize: 10,}}
  checked={true}
/>
<CheckBox
  title='Internet 100 megas'
   size={18}
  containerStyle={styles.CheckBoxContainer}
  textStyle={{fontSize: 10,}}
  checked={true}
/>
  </View>
</View>
</View>

<View style={styles.section}>
<Text style={styles.SubTitleText}>Regras</Text>
<View style={styles.Comfort}>

<View style={styles.HalfSection}>
<CheckBox
  title='Proibido Fumar'
   size={18}
  containerStyle={styles.CheckBoxContainer}
  textStyle={{fontSize: 10,}}
  checked={true}
/><CheckBox
  title='Proibido Beber'
   size={18}
  containerStyle={styles.CheckBoxContainer}
  textStyle={{fontSize: 10,}}
  checked={true}
/>
<CheckBox
  title='Pagamento sempre em dia'
   size={18}
  containerStyle={styles.CheckBoxContainer}
  textStyle={{fontSize: 10,}}
  checked={true}
/>
  </View>


  <View style={styles.HalfSection}>
<CheckBox
  title='Proibido Fumar'
   size={18}
  containerStyle={styles.CheckBoxContainer}
  textStyle={{fontSize: 10,}}
  checked={true}
/><CheckBox
  title='Proibido Beber'
   size={18}
  containerStyle={styles.CheckBoxContainer}
  textStyle={{fontSize: 10,}}
  checked={true}
/>
<CheckBox
  title='Pagamento sempre em dia'
   size={18}
  containerStyle={styles.CheckBoxContainer}
  textStyle={{fontSize: 10,}}
  checked={true}
/>
  </View>

</View>


<View style={styles.section}>

<View style={styles.Title}>
<Text style={styles.SubTitleText}>Compartilhe esta república</Text>
</View>
<View style={styles.Share}>
  
  <Icon
  reverse
  name='whatsapp'
  type='font-awesome'
  color='#5AE777'
  size={16}
/>
<Icon
  reverse
  name='facebook'
  type='font-awesome'
  color='#4167B2'
  size={16}
/>
<Icon
  reverse
  name='twitter'
  type='font-awesome'
  color='#1DA1F3'
  size={16}
/>
</View>
</View>

</View>
</View> 
<Separator space={80} />

</ScrollView>

      <View style={styles.Footer}>
        <View style={styles.FooterContainer}>

    <TouchableHighlight style={styles.Button}>
      
    <Text style={styles.TextLoginButton} >Inscrever-se</Text>  
    </TouchableHighlight>
    

    
    <TouchableHighlight style={styles.Button}>
    <Text style={styles.TextLoginButton} >Conversar</Text>  
    </TouchableHighlight>
    
         </View>
      </View>
      </View>
  );

}