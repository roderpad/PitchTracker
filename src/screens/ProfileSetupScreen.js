import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import {
  CheckBox,
  Input,
  Card,
  ButtonGroup,
  Button,
} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileSetupScreen = () => {
  const [name, setName] = useState('');
  const [pitchingHand, setPitchingHand] = useState('');
  const [pitches, setPitches] = useState({
    '4FB': false,
    '2FB': false,
    Sinker: false,
    Cutter: false,
    CB: false,
    Slurve: false,
    Slider: false,
    'Circle Change': false,
    Splitter: false,
    Knuckle: false,
  });
  const [savedProfile, setSavedProfile] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      const profileData = await AsyncStorage.getItem('userProfile');
      if (profileData) {
        const profile = JSON.parse(profileData);
        setName(profile.name);
        setPitchingHand(profile.pitchingHand);
        setPitches(profile.pitches);
        setSavedProfile(profile);
      }
    };
    loadProfile();
  }, []);

  const saveProfile = async () => {
    const profileData = {name, pitchingHand, pitches};
    await AsyncStorage.setItem('userProfile', JSON.stringify(profileData));
    setSavedProfile(profileData);
  };

  const isProfileComplete = () => {
    return (
      name !== '' && pitchingHand !== '' && Object.values(pitches).some(v => v)
    );
  };

  const hasProfileChanged = () => {
    if (!savedProfile) {
      return true;
    }
    return (
      JSON.stringify({name, pitchingHand, pitches}) !==
      JSON.stringify(savedProfile)
    );
  };

  const getIndicatorStatus = () => {
    if (savedProfile && !hasProfileChanged()) {
      return 'saved';
    }
    if (!isProfileComplete()) {
      return 'incomplete';
    }
    if (!savedProfile && isProfileComplete()) {
      return 'complete';
    }
    if (hasProfileChanged()) {
      return 'changed';
    }
    return 'saved';
  };

  const getIndicatorColor = status => {
    const colorMap = {
      incomplete: 'lightcoral',
      changed: 'khaki',
      complete: 'lightgreen',
      saved: 'none', // No color if saved
    };
    return colorMap[status] || 'none';
  };

  const getIndicatorText = status => {
    const textMap = {
      incomplete: 'Profile is Incomplete',
      changed: 'Unsaved Changes Made',
      complete: 'Unsaved Profile Complete',
      saved: 'Profile Saved',
    };
    return textMap[status] || 'Profile Saved';
  };

  const togglePitch = pitch => {
    setPitches({...pitches, [pitch]: !pitches[pitch]});
  };

  const pitchingHandOptions = ['Left', 'Right', 'Both'];
  const selectedIndex = pitchingHandOptions.indexOf(pitchingHand);

  const renderPitchCheckbox = ({item}) => (
    <CheckBox
      title={item}
      checked={pitches[item]}
      onPress={() => togglePitch(item)}
      containerStyle={styles.checkboxContainer}
      textStyle={styles.checkboxText}
    />
  );

  return (
    <>
      <View
        style={[
          styles.indicator,
          {backgroundColor: getIndicatorColor(getIndicatorStatus())},
        ]}>
        <Text style={styles.indicatorText}>
          {getIndicatorText(getIndicatorStatus())}
        </Text>
      </View>
      <ScrollView style={styles.container}>
        <Card containerStyle={styles.inputCard}>
          <Text style={styles.sectionTitle}>Username</Text>
          <Input
            placeholder="Name"
            value={name}
            onChangeText={setName}
            inputContainerStyle={styles.inputContainer}
            inputStyle={styles.inputText}
          />
        </Card>
        <Card containerStyle={styles.card}>
          <Text style={styles.sectionTitle}>Pitching Hand</Text>
          <ButtonGroup
            buttons={pitchingHandOptions}
            selectedIndex={selectedIndex}
            onPress={index => setPitchingHand(pitchingHandOptions[index])}
            containerStyle={styles.buttonGroupContainer}
            selectedButtonStyle={styles.selectedButton}
            textStyle={styles.buttonGroupText}
          />
        </Card>
        <Card containerStyle={styles.card}>
          <Text style={styles.sectionTitle}>Pitches</Text>
          <FlatList
            data={Object.keys(pitches)}
            renderItem={renderPitchCheckbox}
            numColumns={2}
            keyExtractor={item => item}
            scrollEnabled={false} // Disable scrolling within the FlatList
            style={styles.flatList}
          />
        </Card>
        <Button
          title="Save Profile"
          onPress={saveProfile}
          disabled={!isProfileComplete()}
          buttonStyle={styles.saveButton}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Make room for the indicator
  },
  card: {
    marginBottom: 10,
  },
  inputCard: {
    marginBottom: 0,
    paddingBottom: 0,
  },
  inputContainer: {
    borderBottomWidth: 0,
    paddingTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
  },
  inputText: {
    fontSize: 20,
    paddingTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonGroupContainer: {
    borderRadius: 10,
    borderWidth: 0,
    marginBottom: 10,
  },
  selectedButton: {
    backgroundColor: '#bfe3f5',
  },
  buttonGroupText: {
    fontSize: 16,
  },
  checkboxContainer: {
    width: '50%',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  checkboxText: {
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#005f73',
    borderRadius: 10,
    margin: 10,
  },
  indicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  indicatorText: {
    fontSize: 16,
    color: 'black',
  },
  flatList: {
    alignSelf: 'center',
  },
  // ... add any additional styles you might need
});

export default ProfileSetupScreen;
