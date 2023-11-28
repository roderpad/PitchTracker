import React from 'react';
import {View, Switch} from 'react-native';
import {Button} from '@rneui/themed';
import {NavigationProp} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenWrapper from '../components/ScreenWrapper';
import useThemeMode from '../hooks/useThemeMode';

// Props type for SettingsScreen
type Props = {
  navigation: NavigationProp<any>; // Navigation prop for navigating between screens
};

// SettingsScreen component
const SettingsScreen: React.FC<Props> = ({navigation}) => {
  // Use the custom hook useThemeMode to get the current theme mode and the function to toggle it
  const {isDarkMode, toggleTheme} = useThemeMode();
  console.log('SettingsScreen - isDarkMode:', isDarkMode);

  // Render the settings screen
  return (
    <ScreenWrapper>
      <View>
        {/* Switch for toggling the theme mode */}
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
        {/* Button for navigating to the profile settings screen */}
        <Button
          title="Profile Settings"
          onPress={() => navigation.navigate('SetupProfileScreen')}
        />
        {/* Button for resetting the app (for testing purposes) */}
        <Button
          title="Reset for Testing"
          onPress={() => AsyncStorage.clear()} // Clears all data from AsyncStorage
        />
      </View>
    </ScreenWrapper>
  );
};

export default SettingsScreen;
