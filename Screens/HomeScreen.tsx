import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.settingsIcon}
        onPress={() => navigation.navigate('Settings')}>
        <Icon name="cog" size={30} color="#000" />
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
  },
});

export default HomeScreen;
