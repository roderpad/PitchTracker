/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {useTheme} from '../context/ThemeContext';
import Section from '../components/Section';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {
  const {theme} = useTheme();

  const styles = getStyles(theme); // Call getStyles function with the current theme

  const checkProfileAndNavigate = async screenName => {
    const userProfile = await AsyncStorage.getItem('userProfile');
    if (userProfile) {
      navigation.navigate(screenName);
    } else {
      navigation.navigate('User Profile');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <MaterialIcons
            name="settings"
            size={30}
            color={theme.text}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Section title="Pitch Tracker">
          <Button
            title="Start New Session"
            buttonStyle={{backgroundColor: theme.primary, marginBottom: 20}}
            titleStyle={{color: theme.text}}
            onPress={() => checkProfileAndNavigate('NewSession')}
          />
          <Button
            title="View Past Sessions"
            buttonStyle={{backgroundColor: theme.primary, marginBottom: 20}}
            titleStyle={{color: theme.text}}
            onPress={() => checkProfileAndNavigate('PastSessions')}
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
    iconContainer: {
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

export default HomeScreen;
