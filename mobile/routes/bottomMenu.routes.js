import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Text, View} from 'react-native';
import ListRepublics from '../src/pages/ListRepublics';
import User from '../src/pages/User';
import Messages from '../src/pages/ListMessages';



const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator 
    barStyle={{ backgroundColor: '#FFF' }}

    >

      <Tab.Screen
      initialRouteName="Home"
      
      name="Republicas" component={ListRepublics} 
      options={{
        tabBarLabel: 'Repúblicas',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
        
      }}
      
      />
      
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="message" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={User}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
        
       
    </Tab.Navigator>
  );
}