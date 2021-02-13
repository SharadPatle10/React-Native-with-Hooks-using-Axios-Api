import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { BusinessStackNavigator ,EntertainmentStackNavigator,HealthStackNavigator, ScienceStackNavigator, SportsStackNavigator, TechnologyStackNavigator} from "./StackNavigator";
import TabNavigator from "./TabNavigator";



const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerType ={'slide'}

    >
      <Drawer.Screen name="NEWS" component={TabNavigator} />
      <Drawer.Screen name="Business" component={BusinessStackNavigator} />
      <Drawer.Screen name="Entertainment" component={EntertainmentStackNavigator} />
      <Drawer.Screen name="Health" component={HealthStackNavigator} />
      <Drawer.Screen name="Science" component={ScienceStackNavigator} />
      <Drawer.Screen name="Sports" component={SportsStackNavigator} />
      <Drawer.Screen name="Technology" component={TechnologyStackNavigator} /> 
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;