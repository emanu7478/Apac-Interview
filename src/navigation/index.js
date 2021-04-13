import 'react-native-gesture-handler';
import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import * as Screens from './Routes';

const Stack = createStackNavigator();

const AppScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      headerMode="float"
      animation="fade">
      <Stack.Screen
        name="Home"
        component={Screens.Home}
        options={{
          // title: 'picsaday', //Set Header Title
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

//App root navigator
const AppNavigator = () => {
  return <AppScreens />;
};
export default AppNavigator;
