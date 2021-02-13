import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import India from "../screens/India";
import Business from "../screens/Business";
import Entertainment from '../screens/Entertainment'
import Health from '../screens/Health';
import Science from '../screens/Science';
import Sports from '../screens/Sports';
import Technology from '../screens/Technology';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="NEWS" component={Home} />
      <Stack.Screen name="Business" component={Business} />
      
    </Stack.Navigator>
  );
}

const AllStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="India" component={India} />
    </Stack.Navigator>
  );
}
const BusinessStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Business" component={Business} />
      </Stack.Navigator>
    );
  }
  
  const EntertainmentStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Entertainment" component={Entertainment} />
      </Stack.Navigator>
    );
  }
  
  const HealthStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Health" component={Health} />
      </Stack.Navigator>
    );
  }
  
  const ScienceStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Science" component={Science} />
      </Stack.Navigator>
    );
  }
  
  const SportsStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Sports" component={Sports} />
      </Stack.Navigator>
    );
  }
  
  const TechnologyStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Technology" component={Technology} />
      </Stack.Navigator>
    );
  }
  
export { MainStackNavigator, AllStackNavigator ,BusinessStackNavigator, EntertainmentStackNavigator,HealthStackNavigator, ScienceStackNavigator, SportsStackNavigator, TechnologyStackNavigator };