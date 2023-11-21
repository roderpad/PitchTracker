/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './Navigation/AppNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SetupProfileScreen from './screens/SetupProfileScreen'; // Update the path as needed

const App: React.FC = () => {
  const [hasProfile, setHasProfile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkProfile = async () => {
      const profile = await AsyncStorage.getItem('profile');
      setHasProfile(!!profile);
    };

    checkProfile();
  }, []);

  if (hasProfile === null) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {hasProfile ? <AppNavigation /> : <SetupProfileScreen />}
    </NavigationContainer>
  );
};

export default App;
