import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, useTheme} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScreenWrapper from '../components/ScreenWrapper';

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {theme} = useTheme(); // Hook to get the theme
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.settingsIcon}
          onPress={() => navigation.navigate('Settings')}>
          <Icon name="cog" size={30} color={theme.colors.black} />
        </TouchableOpacity>
        <Button
          title="New Pitching Session"
          onPress={() => {
            /* TODO: Start Pitching Session */
          }}
        />
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
