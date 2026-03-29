import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Check } from 'lucide-react';
import { usePreferences } from '../hooks/usePreferences';

export function Preferences() {
  const navigate = useNavigate();
  const { preferences, setPreferences } = usePreferences();
  const [localPrefs, setLocalPrefs] = useState(preferences);

  const toggleEnvironment = (key: keyof typeof localPrefs.environment) => {
    setLocalPrefs(prev => ({
      ...prev,
      environment: {
        ...prev.environment,
        [key]: !prev.environment[key],
      },
    }));
  };

  const toggleComfort = (key: keyof typeof localPrefs.comfort) => {
    setLocalPrefs(prev => ({
      ...prev,
      comfort: {
        ...prev.comfort,
        [key]: !prev.comfort[key],
      },
    }));
  };

  const setCrowdLevel = (level: typeof localPrefs.crowdLevel) => {
    setLocalPrefs(prev => ({ ...prev, crowdLevel: level }));
  };

  const handleSave = () => {
    setPreferences(localPrefs);
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F4F8] to-white pb-24">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Preferences</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Environment Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Environment</h2>
          <div className="grid grid-cols-2 gap-3">
            <ToggleButton
              active={localPrefs.environment.warm}
              onClick={() => toggleEnvironment('warm')}
              label="Warm place"
            />
            <ToggleButton
              active={localPrefs.environment.quiet}
              onClick={() => toggleEnvironment('quiet')}
              label="Quiet study area"
            />
            <ToggleButton
              active={localPrefs.environment.rest}
              onClick={() => toggleEnvironment('rest')}
              label="Rest area"
            />
            <ToggleButton
              active={localPrefs.environment.food}
              onClick={() => toggleEnvironment('food')}
              label="Food available"
            />
            <ToggleButton
              active={localPrefs.environment.powerOutlets}
              onClick={() => toggleEnvironment('powerOutlets')}
              label="Power outlets"
              className="col-span-2"
            />
          </div>
        </div>

        {/* Crowd Level Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Crowd Level</h2>
          <div className="grid grid-cols-3 gap-3">
            <ToggleButton
              active={localPrefs.crowdLevel === 'low'}
              onClick={() => setCrowdLevel('low')}
              label="Not crowded"
            />
            <ToggleButton
              active={localPrefs.crowdLevel === 'moderate'}
              onClick={() => setCrowdLevel('moderate')}
              label="Moderate"
            />
            <ToggleButton
              active={localPrefs.crowdLevel === 'any'}
              onClick={() => setCrowdLevel('any')}
              label="Any"
            />
          </div>
        </div>

        {/* Comfort Features Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Comfort Features</h2>
          <div className="grid grid-cols-2 gap-3">
            <ToggleButton
              active={localPrefs.comfort.comfortableSeating}
              onClick={() => toggleComfort('comfortableSeating')}
              label="Comfortable seating"
              className="col-span-2"
            />
            <ToggleButton
              active={localPrefs.comfort.indoorWalking}
              onClick={() => toggleComfort('indoorWalking')}
              label="Indoor walking"
            />
            <ToggleButton
              active={localPrefs.comfort.studyFriendly}
              onClick={() => toggleComfort('studyFriendly')}
              label="Study-friendly"
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-[#FF9966] text-white font-semibold py-4 rounded-xl hover:bg-[#FF8855] transition-colors shadow-lg"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}

interface ToggleButtonProps {
  active: boolean;
  onClick: () => void;
  label: string;
  className?: string;
}

function ToggleButton({ active, onClick, label, className = '' }: ToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-4 py-3 rounded-xl font-medium text-sm transition-all
        ${active 
          ? 'bg-[#FF9966] text-white shadow-md' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }
        ${className}
      `}
    >
      {active && (
        <Check className="w-4 h-4 absolute top-2 right-2" />
      )}
      <span className={active ? 'pr-5' : ''}>{label}</span>
    </button>
  );
}
