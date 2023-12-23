import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProfileSetupScreen from './src/screens/ProfileSetupScreen';
import {ThemeProvider, useTheme} from './src/context/ThemeContext';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const {theme} = useTheme(); // Now it's inside a component and will work

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.screenBackground, // Use theme background color
        },
        headerTintColor: theme.text, // Use theme text color
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="User Profile" component={ProfileSetupScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
