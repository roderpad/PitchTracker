import {createTheme} from '@rneui/themed';

const MainTheme = createTheme({
  lightColors: {
    primary: '#3498db', // Vibrant blue
    secondary: '#2ecc71', // Green
    background: '#f5f5f5', // Light gray
  },
  darkColors: {
    primary: '#9b59b6', // Purple
    secondary: '#3498db', // Blue
    background: '#34495e', // Dark blue-gray
  },
  components: {
    Button: {
      raised: true,
    },
  },
});

export default MainTheme;
