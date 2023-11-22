import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import SetupProfileScreen from '../Screens/SetupProfileScreen';

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home Screen'}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Settings Screen'}}
      />
      <Stack.Screen
        name="SetupProfileScreen"
        component={SetupProfileScreen}
        options={{title: 'Settings Screen'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
