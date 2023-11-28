import {createTheme} from '@rneui/themed';

/**
 * Defines the light color palette for the theme.
 * Each color is used for a specific purpose in the app.
 */
export const lightColors = {
  primary: '#3498db', // Vibrant blue used for primary actions and emphasis
  secondary: '#2ecc71', // Green used for secondary content and visual contrast
  background: '#f5f5f5', // Light gray used for general screen backgrounds
  // add other light colors as needed
};

/**
 * Defines the dark color palette for the theme.
 * Each color is used for a specific purpose in the app.
 */
export const darkColors = {
  primary: '#9b59b6', // Purple used for primary actions and emphasis in dark mode
  secondary: '#3498db', // Blue used for secondary content and visual contrast in dark mode
  background: '#34495e', // Dark blue-gray used for general screen backgrounds in dark mode
  // add other dark colors as needed
};

/**
 * MainTheme is the main theme object for the app.
 * It defines the light and dark color palettes and any component-specific styles.
 */
const MainTheme = createTheme({
  lightColors: lightColors, // Light color palette
  darkColors: darkColors, // Dark color palette
  components: {
    Button: {
      raised: true, // All buttons in the app are raised by default
    },
  },
});

export default MainTheme;
