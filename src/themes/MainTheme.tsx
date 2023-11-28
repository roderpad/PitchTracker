import {createTheme} from '@rneui/themed';

export const lightColors = {
  primary: '#3498db', // Vibrant blue
  secondary: '#2ecc71', // Green
  background: '#f5f5f5', // Light gray
  // add other light colors as needed
};

export const darkColors = {
  primary: '#9b59b6', // Purple
  secondary: '#3498db', // Blue
  background: '#34495e', // Dark blue-gray
  // add other dark colors as needed
};

const MainTheme = createTheme({
  lightColors: lightColors,
  darkColors: darkColors,
  components: {
    Button: {
      raised: true,
    },
  },
});

export default MainTheme;
