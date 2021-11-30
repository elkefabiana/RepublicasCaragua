import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

  export default StyleSheet.create({
    scrollView:{
        backgroundColor: '#FFF',
        width: "100%",
        height: "100%",
        
     },
    container: {        
    paddingTop: Constants.statusBarHeight -30,  
     paddingVertical: 24,
     paddingHorizontal: 24,
    },
    TopBar:{
      width: '100%',
      paddingTop: 5,
      flexDirection:'row',     
    },
    Top:{
      paddingTop: Constants.statusBarHeight +10,  
    },
    Filter:{
      flexDirection:'column',
      justifyContent: 'center',
      height: 50,
      alignItems: 'center',
    },
    Search:{
     flexDirection:'column',
     fontFamily: 'RobotoThin',
     width: '80%',
     height: 50,
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

    Filtered:{
      flexDirection: 'row',
      paddingTop: 10,    
    },
    TextFiltered:{
      flexDirection:'column',
      color: '#8F92A1',
      marginRight: 10,
      maxWidth: 80,
      fontSize: 14,
      borderRadius: 4,
     backgroundColor: '#F4F4F5',
     paddingHorizontal: 6,
     paddingVertical: 4
    },
    ListRepublics:{
     paddingTop: 10,
     width: '100%',
    },
    Republic:{
      width: '100%',
    },
    RepublicTitle:{
      fontSize: 20,
      textAlign: 'left',
      fontFamily: 'RobotoBlack',
    },
    ImageRepublicDetail: {
     alignItems:'center',
      position: 'relative',
      minHeight: 180, 
      
     },
    ImageRepublic:{
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      borderRadius: 16,
       
 },
 RepublicDescription:{
   height: 30,
   flexDirection: 'row',
   alignItems: 'flex-start',
  alignItems: 'center', 
  position: 'relative',
 },
 RepublicLocationIcon:{
   width:25, 
   height: '100%', 
  alignItems: 'center', 
  position: 'relative',
  justifyContent: 'center',
},
RepublicDescriptionText:{
  height: '100%', 
  justifyContent: 'center',
  
},
RepublicDescriptionPrice:{
  height: '100%', 
  alignSelf: 'flex-end',
  marginLeft: 'auto',
  flexDirection: 'row',
  color: '#8F92A1',
},
RepublicTextPrice:{
  color: '#049FFF',
  height: '100%', 
  marginTop: 3,
  fontFamily: 'RobotoBlack',
  fontSize: 18,
  
},
RepublicTextPerMonth:{
  fontSize: 12,
  marginTop: 8,
  height: '100%', 
  color: '#8F92A1',
  fontFamily: 'MontserratMedium',
  
}

}, 
  );
  