import React, {useState} from 'react';

import Routes from './routes';

import { AppLoading } from 'expo';

import * as Font from 'expo-font';

export default function App() {
  //Salva o estado que esta de carregamento das fontes
  const [FontLoaded, setFont] = useState(false);

//Função que requisita as fontes utilizadas no projeto
  async function LoadFonts(){
   await Font.loadAsync({
      RobotoThin: {
        uri: require('./src/assets/fonts/Roboto-Thin.ttf'),
      },
      RobotoLight: {
          uri: require('./src/assets/fonts/Roboto-Light.ttf'),
      },
      RobotoBlack: {
          uri: require('./src/assets/fonts/Roboto-Black.ttf'),
      },
      RobotoMedium: {
        uri: require('./src/assets/fonts/Roboto-Medium.ttf'),
    },
    MontserratSemiBold:{
      uri: require('./src/assets/fonts/Montserrat-SemiBold.ttf'), 
    },
    MontserratMedium:{
      uri: require('./src/assets/fonts/Montserrat-Medium.ttf'),
    },
  
    MontserratRegular:{
      uri: require('./src/assets/fonts/Montserrat-Regular.ttf'),
    }   
    });
  }

  //Verifica se as fontes foram carregadas, caso não ele chama a função que requisita as fontes
  if(!FontLoaded){
      return (
        <AppLoading
          startAsync={LoadFonts}
          onFinish={() => setFont(true)}
          onError={console.warn}
        />
      ); 
      }
//Após rolar todo o processo acima, é dado andamento no projeto com as rotas
  return (
    <Routes/>
    
    );
}

// mix-blend-mode: normal;
// opacity: 0.2;
// /* Border/Primary/100% */

// border: 2px solid #8F92A1;
// box-sizing: border-box;
// border-radius: 4px;