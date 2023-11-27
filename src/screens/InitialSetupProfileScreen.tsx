import React from 'react';
import SetupProfileScreen from './SetupProfileScreen';

const InitialSetupProfileScreen: React.FC<{onProfileComplete: () => void}> = ({
  onProfileComplete,
}) => {
  // Pass only the onProfileComplete prop to SetupProfileScreen
  return <SetupProfileScreen onProfileComplete={onProfileComplete} />;
};

export default InitialSetupProfileScreen;
