import 'react-native-gesture-handler';
import React from 'react'

import Main from './src/pages/Main.js'
import Book from './src/pages/Book.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Main"
          component={Main}
        />
        <Stack.Screen name="Book" component={Book} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
