import React from 'react';
import {View, ViewProps} from 'react-native';
import {useTheme} from '@rneui/themed';

// ScreenWrapperProps extends ViewProps to include 'style'
type ScreenWrapperProps = ViewProps;

// ScreenWrapper is a component that wraps its children with a View component
// It uses the current theme to set the background color
const ScreenWrapper: React.FC<ScreenWrapperProps> = ({children, style}) => {
  // Use the current theme
  const {theme} = useTheme();

  // Log the current theme mode (should be 'light' or 'dark')
  console.log('ScreenWrapper theme mode:', theme.mode);

  // Merge the passed style with the container style
  // The container style sets flex to 1 (to fill the parent container) and sets the background color based on the theme
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[{flex: 1, backgroundColor: theme.colors.background}, style]}>
      {children} {/* Render the children inside the View */}
    </View>
  );
};

export default ScreenWrapper;
