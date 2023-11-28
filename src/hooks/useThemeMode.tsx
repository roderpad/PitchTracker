import {useState, useEffect} from 'react';
import {Appearance} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainTheme, {lightColors, darkColors} from '../themes/MainTheme';

const useThemeMode = () => {
  const deviceColorScheme = Appearance.getColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(deviceColorScheme === 'dark');

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setIsDarkMode(colorScheme === 'dark');
    });

    AsyncStorage.getItem('themeMode').then(savedMode => {
      if (savedMode !== null) {
        console.log('Retrieved theme mode from AsyncStorage:', savedMode);
        setIsDarkMode(savedMode === 'dark');
      }
    });

    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      AsyncStorage.setItem('themeMode', newMode ? 'dark' : 'light');
      return newMode;
    });
    console.log('In useThemeMode, theme mode:', theme.mode);
  };

  const theme = isDarkMode
    ? {...MainTheme, mode: 'dark', colors: darkColors}
    : {...MainTheme, mode: 'light', colors: lightColors};

  console.log('Current theme mode:', isDarkMode ? 'Dark' : 'Light');
  console.log('Theme object:', theme);

  return {theme, isDarkMode, toggleTheme};
};

export default useThemeMode;
