import { useState, useEffect } from 'react';

export function useSavedLocations() {
  const [savedLocations, setSavedLocations] = useState<string[]>(() => {
    const stored = localStorage.getItem('winterbreak-saved');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('winterbreak-saved', JSON.stringify(savedLocations));
  }, [savedLocations]);

  const toggleSaved = (locationId: string) => {
    setSavedLocations(prev => 
      prev.includes(locationId)
        ? prev.filter(id => id !== locationId)
        : [...prev, locationId]
    );
  };

  const isSaved = (locationId: string) => savedLocations.includes(locationId);

  return { savedLocations, toggleSaved, isSaved };
}
