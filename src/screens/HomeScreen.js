/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {useTheme} from '../context/ThemeContext';
import Section from '../components/Section';

const HomeScreen = ({navigation}) => {
  const {theme} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor: theme.background,
      }}>
      <Section title="Pitch Tracker">
        <Button
          title="Start New Session"
          buttonStyle={{backgroundColor: theme.primary, marginBottom: 20}}
          titleStyle={{color: theme.text}}
          onPress={() => {
            /* Logic for new session */
          }}
        />
        <Button
          title="View Past Sessions"
          buttonStyle={{backgroundColor: theme.primary, marginBottom: 20}}
          titleStyle={{color: theme.text}}
          onPress={() => {
            /* Logic for past sessions */
          }}
        />
      </Section>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default HomeScreen;
