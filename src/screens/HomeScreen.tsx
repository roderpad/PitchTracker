import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, useTheme} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenWrapper from '../components/ScreenWrapper';

// Props type for HomeScreen
interface Props {
  navigation: any; // Navigation prop for navigating between screens
}

// HomeScreen component
const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {theme} = useTheme(); // Hook to get the theme
  console.log('HomeScreen theme:', theme);
  console.log('HomeScreen re-rendered with theme:', theme.mode);

  // Render the home screen
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Settings button */}
        <TouchableOpacity
          style={styles.settingsIcon}
          onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={30} color={theme.colors.black} />
        </TouchableOpacity>
        {/* New Pitching Session button */}
        <Button
          title="New Pitching Session"
          onPress={() => {
            /* TODO: Start Pitching Session */
          }}
        />
        {/* Historical Data button */}
        <Button
          title="Historical Data"
          onPress={() => {
            /* TODO: Show Historical Data */
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

// Styles for the HomeScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingsIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 10,
  },
});

export default HomeScreen;
