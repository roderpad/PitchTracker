import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  navigation: NavigationProp<any>;
};

const SettingsScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Profile Settings"
        onPress={() => navigation.navigate('SetupProfileScreen')}
      />
      <Button title="Reset for Testing" onPress={() => AsyncStorage.clear()} />
    </View>
  );
};

export default SettingsScreen;
