/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from '../context/ThemeContext';
import Section from '../components/Section';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = ({navigation}) => {
  const {theme, isDarkMode, toggleTheme} = useTheme();

  const styles = getStyles(theme); // Call getStyles function with the current theme

  const resetAppData = async () => {
    try {
      await AsyncStorage.clear(); // Clears all AsyncStorage data
      // Optionally, add logic to reset any states or navigate to another screen
    } catch (error) {
      // Handle errors here if something goes wrong
      console.error('Error clearing app data:', error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.switchContainer}>
        <MaterialIcons
          name="light-mode"
          size={24}
          color={isDarkMode ? '#767577' : '#f5dd4b'} // Light mode icon color
          style={styles.iconStyle}
        />
        <Switch
          onValueChange={toggleTheme}
          value={isDarkMode}
          trackColor={{false: '#767577', true: '#767577'}}
          thumbColor={isDarkMode ? '#6200ee' : '#f5dd4b'}
        />
        <MaterialIcons
          name="dark-mode"
          size={24}
          color={isDarkMode ? '#6200ee' : '#767577'} // Dark mode icon color
          style={styles.iconStyle}
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        <Section title="Account">
          <Button
            title="Setup Pitcher Profile"
            buttonStyle={{backgroundColor: theme.primary, marginBottom: 20}}
            titleStyle={{color: theme.text}}
            onPress={() => navigation.navigate('User Profile')}
          />
        </Section>
        <Section title="Dev-Only">
          <Button
            title="Reset App Data"
            buttonStyle={{backgroundColor: theme.primary, marginBottom: 20}}
            titleStyle={{color: theme.text}}
            onPress={resetAppData}
          />
        </Section>
      </ScrollView>
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
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconStyle: {
      marginLeft: 1, // Adjust space between switch and icon as needed
      marginRight: 1, // Adjust space between switch and icon as needed
    },
    contentContainer: {
      paddingTop: 40,
      width: '100%',
    },
  });

export default SettingsScreen;
