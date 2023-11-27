import React from 'react';
import {View, ViewProps} from 'react-native';
import {useTheme} from '@rneui/themed';

// Extend the props from ViewProps to include 'style'
type ScreenWrapperProps = ViewProps;

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({children, style}) => {
  const {theme} = useTheme();

  // Merge the passed style with the container style
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[{flex: 1, backgroundColor: theme.colors.background}, style]}>
      {children}
    </View>
  );
};

export default ScreenWrapper;
