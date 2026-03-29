import { ArrowLeft, MapPin, Navigation, User } from 'lucide-react';
import { useNavigate } from 'react-router';
import { mockLocations } from '../data/locations';

export function MapView() {
  const navigate = useNavigate();

  // User location (mock)
  const userLocation = { lat: 43.662892, lng: -79.395656 };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm relative z-10">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Campus Map</h1>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="relative h-[calc(100vh-12rem)] bg-gradient-to-br from-blue-100 to-blue-50">
        {/* This would be replaced with an actual map component like Google Maps or Mapbox */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Map View</p>
            <p className="text-sm text-gray-500">Interactive campus map would appear here</p>
          </div>
        </div>

        {/* User Location Marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-blue-500 rounded-full p-3 shadow-lg">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Location List */}
      <div className="max-w-md mx-auto px-6 py-4">
        <h2 className="font-semibold text-gray-900 mb-3">Nearby Locations</h2>
        <div className="space-y-2">
          {mockLocations.slice(0, 3).map((location) => (
            <button
              key={location.id}
              onClick={() => navigate(`/location/${location.id}`)}
              className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-[#FF9966] transition-colors text-left"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{location.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {location.distance}m • {location.walkingTime} min walk
                  </p>
                </div>
                <Navigation className="w-5 h-5 text-[#FF9966]" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
