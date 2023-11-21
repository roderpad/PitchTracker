import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp} from '@react-navigation/native';

const handleCompleteProfile = async (navigation: NavigationProp<any>) => {
  const profileData = {
    // ... your form data
  };

  await AsyncStorage.setItem('profile', JSON.stringify(profileData));
  navigation.navigate('Home'); // replace 'Home' with your actual home screen route name
};

const SetupProfileScreen = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.center}>
      <Text>Profile Setup</Text>
      <Button
        title="Complete Profile"
        onPress={() => handleCompleteProfile(navigation)}
      />
    </View>
  );
};

export default SetupProfileScreen;
