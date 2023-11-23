import React, {useState, useEffect, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'react-native-elements';
import AppNavigation from './Navigation/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import InitialSetupProfileScreen from './Screens/InitialSetupProfileScreen';
import MainTheme from './Themes/MainTheme';

const ThemeProviderAny = ThemeProvider as any;

const App: React.FC = () => {
  const [hasProfile, setHasProfile] = useState<boolean | null>(null);

  const checkProfile = useCallback(async () => {
    const profile = await AsyncStorage.getItem('profile');
    setHasProfile(!!profile);
  }, []);

  useEffect(() => {
    checkProfile();
  }, [checkProfile]);

  return (
    <ThemeProviderAny theme={MainTheme}>
      <NavigationContainer>
        {hasProfile ? (
          <AppNavigation />
        ) : (
          <InitialSetupProfileScreen onProfileComplete={checkProfile} />
        )}
      </NavigationContainer>
    </ThemeProviderAny>
  );
};

export default App;
