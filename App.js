import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProfileSetupScreen from './src/screens/ProfileSetupScreen';
import {ThemeProvider} from './src/context/ThemeContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="User Profile" component={ProfileSetupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
