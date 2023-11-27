import React, {useState, useEffect, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@rneui/themed';
import AppNavigation from './src/navigation/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InitialSetupProfileScreen from './src/screens/InitialSetupProfileScreen';
import useThemeMode from './src/hooks/useThemeMode'; // Import the hook
import ScreenWrapper from './src/components/ScreenWrapper';

const App: React.FC = () => {
  const [hasProfile, setHasProfile] = useState<boolean | null>(null);
  const {theme, toggleTheme} = useThemeMode(); // Use the hook to get the theme

  const checkProfile = useCallback(async () => {
    const profile = await AsyncStorage.getItem('profile');
    setHasProfile(!!profile);
  }, []);

  useEffect(() => {
    checkProfile();
  }, [checkProfile]);

  // Make sure to pass the theme from useThemeMode to the ThemeProvider
  return (
    <ThemeProvider theme={theme}>
      <ScreenWrapper>
        <NavigationContainer>
          {hasProfile ? (
            <AppNavigation />
          ) : (
            <InitialSetupProfileScreen onProfileComplete={checkProfile} />
          )}
        </NavigationContainer>
      </ScreenWrapper>
    </ThemeProvider>
  );
};

export default App;
