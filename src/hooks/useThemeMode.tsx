import {useState, useEffect} from 'react';
import {Appearance} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainTheme, {lightColors, darkColors} from '../themes/MainTheme';

// useThemeMode is a custom hook for managing the app's theme mode (light or dark)
const useThemeMode = () => {
  // Get the device's current color scheme (light or dark)
  const deviceColorScheme = Appearance.getColorScheme();
  // Initialize isDarkMode state based on the device's color scheme
  const [isDarkMode, setIsDarkMode] = useState(deviceColorScheme === 'dark');

  useEffect(() => {
    // Subscribe to color scheme changes on the device
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      // Update isDarkMode state when the device's color scheme changes
      setIsDarkMode(colorScheme === 'dark');
    });

    // Retrieve the saved theme mode from AsyncStorage
    AsyncStorage.getItem('themeMode').then(savedMode => {
      if (savedMode !== null) {
        console.log('Retrieved theme mode from AsyncStorage:', savedMode);
        // Update isDarkMode state with the saved theme mode
        setIsDarkMode(savedMode === 'dark');
      }
    });

    // Unsubscribe from the color scheme changes when the component unmounts
    return () => subscription.remove();
  }, []);

  // Function to toggle the theme mode
  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      // Save the new theme mode in AsyncStorage
      AsyncStorage.setItem('themeMode', newMode ? 'dark' : 'light');
      return newMode;
    });
    console.log('In useThemeMode, theme mode:', theme.mode);
  };

  // Create the theme object based on isDarkMode state
  const theme = isDarkMode
    ? {...MainTheme, mode: 'dark', colors: darkColors}
    : {...MainTheme, mode: 'light', colors: lightColors};

  console.log('Current theme mode:', isDarkMode ? 'Dark' : 'Light');
  console.log('Theme object:', theme);

  // Return the theme object, isDarkMode state, and toggleTheme function
  return {theme, isDarkMode, toggleTheme};
};

export default useThemeMode;
