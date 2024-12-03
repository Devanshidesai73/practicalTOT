import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Favourites from './Favourites';
import {colors} from '../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();

const DashboardScreen = () => {
  const tabConfig = [
    {
      name: 'Home',
      component: 'Home',
      focusedIcon: 'home',
      unFocusedIcon: 'home-outline',
      iconComponent: Ionicons,
    },
    {
      name: 'Favourites',
      component: 'Favourites',
      focusedIcon: 'star',
      unFocusedIcon: 'star-outline',
      iconComponent: Ionicons,
    },
  ];

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      const routeConfig = tabConfig.find(config => config.name == route.name);
      const iconName = focused
        ? routeConfig.focusedIcon
        : routeConfig.unFocusedIcon;
      const IconComponent = routeConfig.iconComponent;

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.primary,
    tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: '600',
    },
  });

  return (
    <Tabs.Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Tabs.Screen
        name={'Home'}
        component={Home}
        // options={{
        //   tabBarIcon: ({focused}) => {
        //     return (
        //       <Ionicons
        //         name={'home-outline'}
        //         size={25}
        //         color={focused ? colors.primary : colors.black}
        //       />
        //     );
        //   },
        // }}
      />
      <Tabs.Screen
        name={'Favourites'}
        component={Favourites}
        // options={{
        //   tabBarIcon: ({focused}) => {
        //     return (
        //       <Ionicons
        //         name={'star-outline'}
        //         size={25}
        //         color={focused ? colors.primary : colors.black}
        //       />
        //     );
        //   },
        // }}
      />
    </Tabs.Navigator>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
