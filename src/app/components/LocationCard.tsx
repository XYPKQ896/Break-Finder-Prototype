import { MapPin, Clock, Flame, Coffee, Zap, Users, Armchair, BookOpen } from 'lucide-react';
import { Location } from '../data/locations';
import { useNavigate } from 'react-router';

interface LocationCardProps {
  location: Location;
  showViewDetails?: boolean;
}

export function LocationCard({ location, showViewDetails = true }: LocationCardProps) {
  const navigate = useNavigate();

  const getFeatureIcons = () => {
    const icons = [];
    if (location.features.warm) icons.push({ icon: Flame, label: 'Warm' });
    if (location.features.food) icons.push({ icon: Coffee, label: 'Food' });
    if (location.features.powerOutlets) icons.push({ icon: Zap, label: 'Outlets' });
    if (location.features.comfortableSeating) icons.push({ icon: Armchair, label: 'Seating' });
    if (location.features.studyFriendly) icons.push({ icon: BookOpen, label: 'Study' });
    return icons;
  };

  const getCrowdColor = () => {
    switch (location.crowdLevel) {
      case 'low': return 'text-green-600';
      case 'moderate': return 'text-yellow-600';
      case 'high': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const featureIcons = getFeatureIcons();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2">{location.name}</h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{location.distance}m</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{location.walkingTime} min walk</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className={`w-4 h-4 ${getCrowdColor()}`} />
            <span className={getCrowdColor()}>{location.crowdLevel}</span>
          </div>
        </div>

        {featureIcons.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {featureIcons.map(({ icon: Icon, label }, index) => (
              <div 
                key={index}
                className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs"
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        )}

        {showViewDetails && (
          <button
            onClick={() => navigate(`/location/${location.id}`)}
            className="w-full bg-[#FF9966] text-white font-medium py-3 rounded-xl hover:bg-[#FF8855] transition-colors"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  );
}
