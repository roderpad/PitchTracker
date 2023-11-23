import {Theme} from 'react-native-elements';

const MainTheme: Theme = {
  colors: {
    primary: '#3498db', // A vibrant blue
    secondary: '#2ecc71', // A fresh green
    grey0: '#7f8c8d', // A neutral grey
    grey1: '#95a5a6',
    grey2: '#bdc3c7',
    grey3: '#ecf0f1',
    grey4: '#f5f6fa',
    grey5: '#2c3e50', // A darker shade for text
    white: '#ffffff',
    black: '#34495e', // Soft black
    error: '#e74c3c', // Error red
    warning: '#f39c12', // Warning orange
    success: '#2ecc71', // Success green
  },
  Button: {
    buttonStyle: {
      borderRadius: 5,
    },
    titleStyle: {
      fontFamily: 'Roboto', // Ensure this font is linked in your project
    },
  },
  Input: {
    containerStyle: {
      marginBottom: 10,
    },
    inputStyle: {
      fontFamily: 'Roboto',
    },
  },
  Text: {
    style: {
      fontFamily: 'Roboto',
      color: '#2c3e50',
    },
  },
  // Add other component styles as needed
};

export default MainTheme;
