import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SetupProfileScreen from '../screens/SetupProfileScreen';
import {useTheme} from '@rneui/themed';

// Create a stack navigator for navigating between screens
const Stack = createNativeStackNavigator();

// AppNavigation component
const AppNavigation: React.FC = () => {
  // Use the current theme
  const {theme} = useTheme();

  return (
    // Stack.Navigator contains the screens in the app
    <Stack.Navigator
      screenOptions={{
        // Set the background color of the header based on the theme
        headerStyle: {
          backgroundColor: theme.colors.searchBg,
        },
        // Set the color of the header text (e.g., title, back button) based on the theme
        headerTintColor: theme.colors.black,
        // Set the style of the header title
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* Home screen */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      {/* Settings screen */}
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
      {/* Profile setup screen */}
      <Stack.Screen
        name="SetupProfileScreen"
        component={SetupProfileScreen}
        options={{title: 'Profile Settings'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
