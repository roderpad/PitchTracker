import {useState, useEffect} from 'react';
import {Appearance} from 'react-native';
import MainTheme, {lightColors, darkColors} from '../themes/MainTheme';

const useThemeMode = () => {
  // Get the default color scheme from the device settings
  const deviceColorScheme = Appearance.getColorScheme(); // Renamed variable
  const [isDarkMode, setIsDarkMode] = useState(deviceColorScheme === 'dark');

  useEffect(() => {
    // Update the theme mode based on system changes
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setIsDarkMode(colorScheme === 'dark');
    });
    return () => subscription.remove();
  }, []);

  const theme = isDarkMode
    ? {...MainTheme, colors: darkColors}
    : {...MainTheme, colors: lightColors};

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return {theme, toggleTheme};
};

export default useThemeMode;
