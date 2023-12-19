/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Button, Switch} from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      <Switch
        onValueChange={() => setIsDarkMode(previousState => !previousState)}
        value={isDarkMode}
      />
    </View>
  );
};

export default SettingsScreen;
