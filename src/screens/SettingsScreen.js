/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {useTheme} from '../context/ThemeContext';
import Section from '../components/Section';

const SettingsScreen = () => {
  const {theme, isDarkMode, toggleTheme} = useTheme();

  const styles = getStyles(theme); // Call getStyles function with the current theme

  return (
    <View style={styles.mainContainer}>
      <View style={styles.switchContainer}>
        <Switch
          onValueChange={toggleTheme}
          value={isDarkMode}
          trackColor={{false: '#767577', true: '#767577'}}
          thumbColor={isDarkMode ? '#6200ee' : '#f5dd4b'}
        />
      </View>
      <View style={styles.contentContainer}>
        <Section title="Account">
          <Button
            title="Setup Pitcher Profile"
            buttonStyle={{backgroundColor: theme.primary, marginBottom: 20}}
            titleStyle={{color: theme.text}}
            onPress={() => {
              /* Logic for setup */
            }}
          />
        </Section>
        <Section title="Dev-Only">
          <Button
            title="Reset App Data"
            buttonStyle={{backgroundColor: theme.primary, marginBottom: 20}}
            titleStyle={{color: theme.text}}
            onPress={() => {
              /* Logic for reset */
            }}
          />
        </Section>
      </View>
    </View>
  );
};

// Function to create styles dynamically based on the theme
const getStyles = theme =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'top',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    switchContainer: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 1,
    },
    contentContainer: {
      paddingTop: 40,
      width: '100%',
    },
  });

export default SettingsScreen;
