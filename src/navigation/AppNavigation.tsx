import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SetupProfileScreen from '../screens/SetupProfileScreen';
import {useTheme} from '@rneui/themed';

const Stack = createNativeStackNavigator();

const AppNavigation: React.FC = () => {
  const {theme} = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.searchBg, // Set your dark background color here
        },
        headerTintColor: theme.colors.black, // Set the color of header text (e.g., title, back button)
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
      <Stack.Screen
        name="SetupProfileScreen"
        component={SetupProfileScreen}
        options={{title: 'Profile Settings'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
