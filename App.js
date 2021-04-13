import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import AppIndex from './src';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <AppIndex />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
export default App;
