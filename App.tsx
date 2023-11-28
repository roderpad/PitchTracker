import React, {useState, useEffect, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@rneui/themed';
import AppNavigation from './src/navigation/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InitialSetupProfileScreen from './src/screens/InitialSetupProfileScreen';
import useThemeMode from './src/hooks/useThemeMode'; // Custom hook for managing theme mode
import ScreenWrapper from './src/components/ScreenWrapper';

// Main App component
const App: React.FC = () => {
  // State to track if user profile exists
  const [hasProfile, setHasProfile] = useState<boolean | null>(null);

  // Use custom hook to get the current theme
  const {theme} = useThemeMode();

  /**
   * Checks if a profile exists in AsyncStorage and updates the state accordingly.
   * This function is wrapped in useCallback to prevent unnecessary re-renders.
   */
  const checkProfile = useCallback(async () => {
    const profile = await AsyncStorage.getItem('profile');
    setHasProfile(!!profile);
  }, []);

  // Use useEffect to call checkProfile when the component mounts
  useEffect(() => {
    checkProfile();
  }, [checkProfile]);

  // Render the app with the current theme. If a profile exists, render the main navigation. Otherwise, render the profile setup screen.
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
