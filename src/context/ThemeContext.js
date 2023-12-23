import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {lightTheme} from '../theme/lightTheme';
import {darkTheme} from '../theme/darkTheme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    await AsyncStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  useEffect(() => {
    const loadThemePreference = async () => {
      const savedMode = await AsyncStorage.getItem('darkMode');
      if (savedMode !== null) {
        setIsDarkMode(JSON.parse(savedMode));
      }
    };

    loadThemePreference();
  }, []);

  return (
    <ThemeContext.Provider value={{theme, isDarkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
