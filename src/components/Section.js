import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from '../context/ThemeContext'; // Adjust the path as necessary

const Section = ({title, children}) => {
  const {theme} = useTheme();

  // Styles that depend on the theme
  const dynamicStyles = StyleSheet.create({
    section: {
      borderWidth: 1,
      borderColor: theme.borderColor, // Use borderColor from theme
      borderRadius: 5,
      padding: 15,
      marginBottom: 10,
      marginTop: 10,
      backgroundColor: theme.sectionBackground, // Use sectionBackground from theme
      width: '95%',
      alignSelf: 'center',
    },
    sectionTitle: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 20,
      color: theme.text, // Use text color from theme
    },
  });

  return (
    <View style={dynamicStyles.section}>
      <Text style={dynamicStyles.sectionTitle}>{title}</Text>
      <View>{children}</View>
    </View>
  );
};

export default Section;
