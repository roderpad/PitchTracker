/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Button, Switch} from 'react-native';
import {useTheme} from '../context/ThemeContext';

const SettingsScreen = () => {
  const {isDarkMode, toggleTheme} = useTheme();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings Screen</Text>
      <Button
        title="Setup Pitcher Profile"
        onPress={() => {
          /* Logic for setup */
        }}
      />
      <Button
        title="Reset App Data"
        onPress={() => {
          /* Logic for reset */
        }}
      />
      <Switch onValueChange={toggleTheme} value={isDarkMode} />
    </View>
  );
};

export default SettingsScreen;
