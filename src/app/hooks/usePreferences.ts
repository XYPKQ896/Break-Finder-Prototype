import { useState, useEffect } from 'react';

export interface Preferences {
  environment: {
    warm: boolean;
    quiet: boolean;
    rest: boolean;
    food: boolean;
    powerOutlets: boolean;
  };
  crowdLevel: 'low' | 'moderate' | 'any';
  comfort: {
    comfortableSeating: boolean;
    indoorWalking: boolean;
    studyFriendly: boolean;
  };
}

const defaultPreferences: Preferences = {
  environment: {
    warm: true,
    quiet: false,
    rest: false,
    food: false,
    powerOutlets: false,
  },
  crowdLevel: 'any',
  comfort: {
    comfortableSeating: false,
    indoorWalking: false,
    studyFriendly: false,
  },
};

export function usePreferences() {
  const [preferences, setPreferences] = useState<Preferences>(() => {
    const stored = localStorage.getItem('winterbreak-preferences');
    return stored ? JSON.parse(stored) : defaultPreferences;
  });

  useEffect(() => {
    localStorage.setItem('winterbreak-preferences', JSON.stringify(preferences));
  }, [preferences]);

  const updatePreferences = (newPreferences: Partial<Preferences>) => {
    setPreferences(prev => ({ ...prev, ...newPreferences }));
  };

  return { preferences, updatePreferences, setPreferences };
}
