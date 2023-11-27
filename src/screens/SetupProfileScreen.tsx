import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {Button, Input, Text} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ParamListBase} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import ScreenWrapper from '../components/ScreenWrapper';

// Define the type for your navigation prop based on your navigation configuration
type Props = Partial<StackScreenProps<ParamListBase>> & {
  onProfileComplete?: () => void;
};

const SetupProfileScreen: React.FC<Props> = ({
  navigation,
  onProfileComplete,
}) => {
  const [name, setName] = useState('');
  const [handedness, setHandedness] = useState('');
  const [pitches, setPitches] = useState(new Set());
  const pitchOptions = [
    '4-Seam FB',
    '2-Seam FB',
    'Sinker',
    'Cutter',
    'CB',
    'Slider',
    'Slurve',
    'ChangeUp',
    'Splitter',
    'Knuckle Ball',
  ];

  useEffect(() => {
    const loadProfileData = async () => {
      const profileString = await AsyncStorage.getItem('profile');
      if (profileString) {
        const profileData = JSON.parse(profileString);
        setName(profileData.name);
        setHandedness(profileData.handedness);
        setPitches(new Set(profileData.pitches));
      }
    };

    loadProfileData();
  }, []);

  const handleSaveProfile = async () => {
    if (!name || !handedness || pitches.size === 0) {
      Alert.alert('Profile Incomplete', 'Please fill in all required fields.');
      return;
    }

    const profileData = {name, handedness, pitches: Array.from(pitches)};
    await AsyncStorage.setItem('profile', JSON.stringify(profileData));
    if (navigation) {
      navigation.navigate('Home'); // Make sure 'Home' matches your home screen route name
    }
    if (onProfileComplete) {
      onProfileComplete();
    }
  };

  const togglePitchSelection = (pitch: string) => {
    const updatedPitches = new Set(pitches);
    if (updatedPitches.has(pitch)) {
      updatedPitches.delete(pitch);
    } else {
      updatedPitches.add(pitch);
    }
    setPitches(updatedPitches);
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Input
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <View style={styles.radioGroup}>
          {['Left', 'Right', 'Ambidextrous'].map(hand => (
            <TouchableOpacity
              key={hand}
              style={styles.radioOption}
              onPress={() => setHandedness(hand)}>
              <Text
                style={
                  handedness === hand ? styles.selected : styles.radioText
                }>
                {hand}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.pitchGroup}>
          {pitchOptions.map(pitch => (
            <TouchableOpacity
              key={pitch}
              style={styles.pitchOption}
              onPress={() => togglePitchSelection(pitch)}>
              <Text
                style={
                  pitches.has(pitch) ? styles.selectedPitch : styles.pitchText
                }>
                {pitch}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Button title="Save Profile" onPress={handleSaveProfile} />
        <Button
          title="Go Back"
          onPress={() => {
            navigation?.goBack();
          }}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    width: '80%',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  radioOption: {
    marginHorizontal: 10,
  },
  radioText: {
    // style for unselected radio options
  },
  selected: {
    fontWeight: 'bold',
  },
  pitchGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 10,
  },
  pitchOption: {
    margin: 5,
  },
  pitchText: {
    // style for unselected pitch options
  },
  selectedPitch: {
    fontWeight: 'bold',
  },
});

export default SetupProfileScreen;
