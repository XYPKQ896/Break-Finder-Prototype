import { ArrowLeft, MapPin, Clock, Flame, Coffee, Zap, Users, Armchair, BookOpen, Bookmark, ExternalLink } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { mockLocations } from '../data/locations';
import { useSavedLocations } from '../hooks/useSavedLocations';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function LocationDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isSaved, toggleSaved } = useSavedLocations();

  const location = mockLocations.find(loc => loc.id === id);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Location not found</p>
      </div>
    );
  }

  const getFeaturesList = () => {
    const features = [];
    if (location.features.warm) features.push({ icon: Flame, label: 'Warm indoor space' });
    if (location.features.food) features.push({ icon: Coffee, label: 'Food available' });
    if (location.features.powerOutlets) features.push({ icon: Zap, label: 'Power outlets' });
    if (location.features.comfortableSeating) features.push({ icon: Armchair, label: 'Comfortable seating' });
    if (location.features.studyFriendly) features.push({ icon: BookOpen, label: 'Study-friendly' });
    if (location.features.quiet) features.push({ icon: Users, label: 'Quiet environment' });
    return features;
  };

  const getCrowdText = () => {
    switch (location.crowdLevel) {
      case 'low': return 'Not crowded';
      case 'moderate': return 'Moderately crowded';
      case 'high': return 'Usually crowded';
      default: return '';
    }
  };

  const getCrowdColor = () => {
    switch (location.crowdLevel) {
      case 'low': return 'text-green-600 bg-green-50';
      case 'moderate': return 'text-yellow-600 bg-yellow-50';
      case 'high': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const features = getFeaturesList();
  const saved = isSaved(location.id);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header Image */}
      <div className="relative">
        <ImageWithFallback
          src={location.imageUrl}
          alt={location.name}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={() => toggleSaved(location.id)}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <Bookmark 
            className={`w-6 h-6 ${saved ? 'fill-[#FF9966] text-[#FF9966]' : 'text-gray-700'}`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6">
        {/* Title and Type */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{location.name}</h1>
          <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {location.type}
          </span>
        </div>

        {/* Distance and Time */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span className="font-medium">{location.distance}m away</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-5 h-5" />
            <span className="font-medium">{location.walkingTime} min walk</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">{location.description}</p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Features</h2>
          <div className="space-y-2">
            {features.map(({ icon: Icon, label }, index) => (
              <div key={index} className="flex items-center gap-3 bg-blue-50 rounded-xl p-3">
                <Icon className="w-5 h-5 text-blue-600" />
                <span className="text-gray-800">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 rounded-2xl p-4 space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Opening Hours</span>
            <span className="font-medium text-gray-900">{location.openingHours}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Distance</span>
            <span className="font-medium text-gray-900">{location.distance}m</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Walking Time</span>
            <span className="font-medium text-gray-900">{location.walkingTime} minutes</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Crowd Level</span>
            <span className={`font-medium px-3 py-1 rounded-full text-sm ${getCrowdColor()}`}>
              {getCrowdText()}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => {
              // Open in Apple Maps (iOS) or Google Maps (Android/Web)
              const query = encodeURIComponent(`${location.name} ${location.building}`);
              window.open(`https://maps.apple.com/?q=${query}`, '_blank');
            }}
            className="w-full bg-[#FF9966] text-white font-semibold py-4 rounded-xl hover:bg-[#FF8855] transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            Open in Maps
          </button>
          <button
            onClick={() => toggleSaved(location.id)}
            className={`w-full font-semibold py-4 rounded-xl transition-colors border-2 flex items-center justify-center gap-2 ${
              saved
                ? 'bg-orange-50 border-[#FF9966] text-[#FF9966]'
                : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Bookmark className={`w-5 h-5 ${saved ? 'fill-current' : ''}`} />
            {saved ? 'Saved' : 'Save Location'}
          </button>
        </div>
      </div>
    </div>
  );
}