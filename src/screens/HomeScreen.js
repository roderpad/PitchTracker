/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements';
import {useTheme} from '../context/ThemeContext';
import Section from '../components/Section';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Import MaterialIcons
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  const {theme} = useTheme();

  const [logoHeight, setLogoHeight] = useState(
    Dimensions.get('window').height * 0.3,
  );

  const styles = getStyles(theme, logoHeight);

  useEffect(() => {
    const updateLayout = () => {
      setLogoHeight(Dimensions.get('window').height * 0.3);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => Dimensions.removeEventListener('change', updateLayout);
  }, []);

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
      <ScrollView style={styles.contentContainer}>
        <Image source={require('../assets/PTlogo.png')} style={styles.logo} />
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
      </ScrollView>
    </View>
  );
};

// Function to create styles dynamically based on the theme
const getStyles = (theme, logoHeight) =>
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
    logo: {
      width: '100%', // Set the width of your logo
      height: logoHeight, // Set the height of your logo
      resizeMode: 'contain', // Keeps the aspect ratio intact
      alignSelf: 'center',
    },
  });

export default HomeScreen;
