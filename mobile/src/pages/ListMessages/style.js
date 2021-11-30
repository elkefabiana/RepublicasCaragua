import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';

  export default StyleSheet.create({
    scrollView:{
        width: "100%",
        height: "100%",
        backgroundColor: '#F4F4F5',

     },    
     container: {   
       paddingHorizontal:24
    }, 
    Navbar:{
       width: '100%',
       backgroundColor: '#FFF',
    },
     TopBar:{
       width: '100%',
       flexDirection:'row',  
       alignSelf: 'center',
     },
     Search:{
       alignItems: 'center',
      flexDirection:'column',
      fontFamily: 'RobotoThin',
      width: '100%',
      height: 60,
     },
     InputSearch:{
       paddingLeft: 10,
       backgroundColor: '#F4F4F5',
       paddingTop: 10,
       paddingBottom: 10,
       borderRadius: 48,
       width:'100%',
      borderWidth: 1,
      borderColor: '#BFC0C1'
     },

     MessagesBackground:{
      paddingTop: 10,
      backgroundColor: '#F4F4F5',
      height: '100%',
      width: '100%',
    },
    MessageLine:{
      marginTop:20,
      width: '100%',
      height: 70,
      flexDirection: 'row',
      flexWrap:'wrap'
    },
    MessageRepublicImage:{      
     width: '25%',
     maxWidth: 70,
     height:  '100%',
    },
    MessageRepublic:{
    width: '75%',
    height: '100%',
    },
    TopMessage:{
      paddingTop:5,
    width: '100%',
    height: 30,
    flexDirection: 'row',
    paddingLeft:10,

    fontFamily: 'RobotoThin'
    },
    Message:{
      height: 50, 
      paddingLeft:10,
       
    },
    RepublicNameText:{
      fontFamily: 'RobotoMedium',
      fontSize: 15,
    },
    MesssageText:{
      fontSize: 12,
      fontFamily: 'RobotoThin'
    },
    MessageTime: {
      marginLeft:'auto', 
      color:'#8F92A1',
      fontSize: 10,
      paddingTop:5,
    },
 
  

},
 
  
  
  );
  