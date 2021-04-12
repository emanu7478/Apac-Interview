import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import AppIndex from './src';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppIndex />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
