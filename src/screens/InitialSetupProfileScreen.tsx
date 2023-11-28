import React from 'react';
import SetupProfileScreen from './SetupProfileScreen';

// InitialSetupProfileScreen is a wrapper component for SetupProfileScreen
// It receives a callback function 'onProfileComplete' as a prop
const InitialSetupProfileScreen: React.FC<{onProfileComplete: () => void}> = ({
  onProfileComplete,
}) => {
  // Pass only the onProfileComplete prop to SetupProfileScreen
  // This component acts as a bridge, allowing the parent component to be notified when the profile setup is complete
  return <SetupProfileScreen onProfileComplete={onProfileComplete} />;
};

export default InitialSetupProfileScreen;
