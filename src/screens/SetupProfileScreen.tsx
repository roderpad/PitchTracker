import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {Button, Input, Text} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ParamListBase} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import ScreenWrapper from '../components/ScreenWrapper';

// Define the type for your navigation prop based on your navigation configuration
type Props = Partial<StackScreenProps<ParamListBase>> & {
  onProfileComplete?: () => void; // Optional callback function that is called when the profile setup is complete
};

// SetupProfileScreen component
const SetupProfileScreen: React.FC<Props> = ({
  onProfileComplete, // Callback function for when the profile setup is complete
}) => {
  // State for the name input
  const [name, setName] = useState('');
  // State for the handedness input
  const [handedness, setHandedness] = useState('');
  // State for the pitches input (a Set of selected pitches)
  const [pitches, setPitches] = useState(new Set());
  // Array of possible pitches
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

  // Effect hook for loading the profile data from AsyncStorage when the component mounts
  useEffect(() => {
    const loadProfileData = async () => {
      // Get the profile data from AsyncStorage
      const profileString = await AsyncStorage.getItem('profile');
      if (profileString) {
        // Parse the profile data and update the state
        const profileData = JSON.parse(profileString);
        setName(profileData.name);
        setHandedness(profileData.handedness);
        setPitches(new Set(profileData.pitches));
      }
    };

    // Call the function to load the profile data
    loadProfileData();
  }, []);

  // Function for saving the profile data
  const handleSaveProfile = async () => {
    // Validate the input fields
    if (!name || !handedness || pitches.size === 0) {
      // Show an alert if any of the fields are empty
      Alert.alert('Profile Incomplete', 'Please fill in all required fields.');
      return;
    }

    // Create the profile data object
    const profileData = {
      name,
      handedness,
      pitches: Array.from(pitches),
    };

    // Save the profile data in AsyncStorage
    await AsyncStorage.setItem('profile', JSON.stringify(profileData));

    // Call the onProfileComplete callback function if it was provided
    if (onProfileComplete) {
      onProfileComplete();
    }
  };

  // Render the setup profile screen
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Input for the name */}
        <Input label="Name" value={name} onChangeText={setName} />
        {/* Input for the handedness */}
        <Input
          label="Handedness"
          value={handedness}
          onChangeText={setHandedness}
        />
        {/* List of pitch options */}
        {pitchOptions.map(pitch => (
          <TouchableOpacity
            key={pitch}
            style={styles.pitchOption}
            onPress={() => {
              // Toggle the selection of the pitch
              if (pitches.has(pitch)) {
                pitches.delete(pitch);
              } else {
                pitches.add(pitch);
              }
              // Update the pitches state
              setPitches(new Set(pitches));
            }}>
            <Text>{pitch}</Text>
            {/* Show a checkmark next to the selected pitches */}
            {pitches.has(pitch) && <Text>✓</Text>}
          </TouchableOpacity>
        ))}
        {/* Save button */}
        <Button title="Save Profile" onPress={handleSaveProfile} />
      </View>
    </ScreenWrapper>
  );
};

// Styles for the SetupProfileScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  pitchOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
});

export default SetupProfileScreen;
