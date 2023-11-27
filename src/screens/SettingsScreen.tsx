import React from 'react';
import {View, Switch} from 'react-native';
import {Button} from '@rneui/themed';
import {NavigationProp} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenWrapper from '../components/ScreenWrapper';
import useThemeMode from '../hooks/useThemeMode';

type Props = {
  navigation: NavigationProp<any>;
};

const SettingsScreen: React.FC<Props> = ({navigation}) => {
  const {theme, toggleTheme} = useThemeMode();
  const isDarkMode = theme.mode === 'dark';

  return (
    <ScreenWrapper>
      <View>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
        <Button
          title="Profile Settings"
          onPress={() => navigation.navigate('SetupProfileScreen')}
        />
        <Button
          title="Reset for Testing"
          onPress={() => AsyncStorage.clear()}
        />
      </View>
    </ScreenWrapper>
  );
};

export default SettingsScreen;
