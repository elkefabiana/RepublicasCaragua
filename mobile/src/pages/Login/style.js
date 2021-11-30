import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';

const fetchFonts = async () =>{
  return await Font.loadAsync({
    RobotoThin: {
      uri: require('../../assets/fonts/Roboto-Thin.ttf'),
    },
    RobotoLight: {
        uri: require('../../assets/fonts/Roboto-Light.ttf'),
    },
    RobotoBlack: {
        uri: require('../../assets/fonts/Roboto-Black.ttf'),
    },
    RobotoMedium: {
      uri: require('../../assets/fonts/Roboto-Medium.ttf'),
  },
  MontserratSemiBold:{
    uri: require('../../assets/fonts/Montserrat-SemiBold.ttf'), 
  },
  MontserratMedium:{
    uri: require('../../assets/fonts/Montserrat-Medium.ttf'),
  },

  MontserratRegular:{
    uri: require('../../assets/fonts/Montserrat-Regular.ttf'),
  }   
  });
}

fetchFonts()


export default StyleSheet.create({
    scrollView:{
        backgroundColor: '#FFF'
     },
    container: {        
    paddingTop: Constants.statusBarHeight -30,  
     width: "100%",
     height: "100%",
    },
  
    TopLogin:{
      width: '100%',
      height: '100%',
      maxHeight: 300,

    },
    TopImageLogin:{
        width: '100%',
        height: '100%',
        top: '0%',

    },
    GroupLogin:{
      paddingHorizontal: 24,
      width: '100%',
      height: '100%',
      top: '-5%',
      backgroundColor: '#FFF',
      borderTopRightRadius: 24,
      borderTopLeftRadius: 24,
       alignItems: 'center',
      

     },
    GroupLoginContainer:{
      width: '100%',
      maxWidth: 400,
      borderTopRightRadius: 24,
      borderTopLeftRadius: 24,

    },
    Input:{
      width:'100%',
      marginTop: 40,
      fontFamily: "RobotoBlack",
      borderColor: '#8F92A1',
      borderRadius: 4,
      borderBottomWidth: 1,
      borderBottomColor: '#8F92A1',
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      backgroundColor: '#FFFFFF',
      paddingTop: 5,
      paddingBottom: 5,
      fontSize: 13,
      color: '#8F92A1'
      
    },
    TextWelcome:{
        paddingTop: 20,
        fontSize: 24,
        fontFamily: "RobotoLight",
        fontWeight: 'bold'
    },
    textNormal:{
        fontFamily: "RobotoBlack",
        paddingTop: 2
        
    },
    SpaceTop:{
     marginTop: 30,
    },
    Button:{
        marginTop:30,
        width: '100%',
    },
    TextLoginButton:{
    paddingTop:15,
    fontFamily: 'RobotoThin',
    fontWeight: 'bold',
    fontStyle: 'normal',    
    height: 50,
    fontSize: 16,
    paddingBottom:4,
    color:'#fff',
    textAlign:'center',
    backgroundColor:'#049FFF',
    borderRadius: 60,
    borderWidth: 0,
    },

    TextAlternativeButton:{
        paddingTop:15,
        fontFamily: 'RobotoThin',
        fontWeight: 'bold',
        fontStyle: 'normal',    
        height: 50,
        fontSize: 16,
        paddingBottom:4,
        color:'#2E3034',
        textAlign:'center',
        backgroundColor:'#FFF',
        borderRadius: 60,   
        borderWidth: 2,
        borderColor: '#E0E0E0',
        },
});
