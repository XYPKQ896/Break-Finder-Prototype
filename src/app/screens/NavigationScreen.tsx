import { ArrowLeft, Navigation, MapPin, X } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import { mockLocations } from '../data/locations';

export function NavigationScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const location = mockLocations.find(loc => loc.id === id);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Location not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Map Area */}
      <div className="flex-1 relative bg-gradient-to-br from-blue-100 to-blue-50">
        {/* This would be replaced with an actual navigation map */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Navigation Map</p>
            <p className="text-sm text-gray-500">Turn-by-turn directions would appear here</p>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        {/* Info Panel */}
        <div className="absolute top-4 left-4 right-20 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          <h2 className="font-semibold text-gray-900 mb-1">{location.name}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>{location.distance}m</span>
            <span>•</span>
            <span>{location.walkingTime} min walk</span>
          </div>
        </div>
      </div>

      {/* Bottom Control Panel */}
      <div className="bg-white border-t border-gray-200 p-6 safe-area-inset-bottom">
        <div className="max-w-md mx-auto space-y-3">
          <button className="w-full bg-[#FF9966] text-white font-semibold py-4 rounded-xl hover:bg-[#FF8855] transition-colors shadow-lg flex items-center justify-center gap-2">
            <Navigation className="w-5 h-5" />
            Start Navigation
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-blue-50 text-blue-700 font-medium py-3 rounded-xl hover:bg-blue-100 transition-colors">
              View Indoor Entrance
            </button>
            <button 
              onClick={() => navigate(-1)}
              className="bg-gray-100 text-gray-700 font-medium py-3 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
          </div>

          {/* Directions Summary */}
          <div className="bg-gray-50 rounded-xl p-4 mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">Directions</h3>
            <ol className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#FF9966] font-semibold">1.</span>
                <span>Head north on St. George Street</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF9966] font-semibold">2.</span>
                <span>Turn right at College Street</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF9966] font-semibold">3.</span>
                <span>Enter {location.name} on your left</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
