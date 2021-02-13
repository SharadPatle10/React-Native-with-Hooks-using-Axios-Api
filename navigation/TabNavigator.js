import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons,Fontisto } from '@expo/vector-icons';
import { MainStackNavigator, AllStackNavigator } from "./StackNavigator";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="World" 
        component={MainStackNavigator} 
        options={{
          tabBarLabel: 'World',
          tabBarIcon:({color,size}) =>(
            <Fontisto name="world" size={size} color="#9AC4F8" /> 
          )
        }}
      />
      <Tab.Screen 
      name="India" 
      component={AllStackNavigator}
      options={{
        tabBarLabel: 'India',
        tabBarIcon:({color,size}) =>(
          <Fontisto name="flag" size={size} color="#9AC4F8" /> 
        )
      }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;