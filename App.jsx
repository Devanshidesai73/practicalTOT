import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import DashboardScreen from './src/screen/DashboardScreen';
import LoginScreen from './src/screen/LoginScreen';
import {Provider, useSelector} from 'react-redux';
import {persistor, store} from './src/store/store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const isLoggedIn = useSelector(state => state.loginData.isLoggedIn);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={isLoggedIn ? 'Dashboard' : 'Login'}>
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'Dashboard'} component={DashboardScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
