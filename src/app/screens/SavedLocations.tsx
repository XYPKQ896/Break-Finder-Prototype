import { Navigation, BookmarkX } from 'lucide-react';
import { useNavigate } from 'react-router';
import { mockLocations } from '../data/locations';
import { useSavedLocations } from '../hooks/useSavedLocations';

export function SavedLocations() {
  const navigate = useNavigate();
  const { savedLocations, toggleSaved } = useSavedLocations();

  const saved = mockLocations.filter(loc => savedLocations.includes(loc.id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F4F8] to-white pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Saved Places</h1>
          <p className="text-sm text-gray-600 mt-1">Your bookmarked locations</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6">
        {saved.length > 0 ? (
          <div className="space-y-3">
            {saved.map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{location.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {location.distance}m • {location.walkingTime} min walk
                    </p>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/navigate/${location.id}`)}
                        className="flex-1 bg-[#FF9966] text-white font-medium py-2.5 rounded-lg hover:bg-[#FF8855] transition-colors flex items-center justify-center gap-2"
                      >
                        <Navigation className="w-4 h-4" />
                        Navigate
                      </button>
                      <button
                        onClick={() => navigate(`/location/${location.id}`)}
                        className="flex-1 bg-blue-50 text-blue-700 font-medium py-2.5 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleSaved(location.id)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <BookmarkX className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookmarkX className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">No saved locations yet</h3>
            <p className="text-gray-600 mb-4">
              Save your favorite places for quick access
            </p>
            <button
              onClick={() => navigate('/recommendations')}
              className="bg-[#FF9966] text-white font-medium px-6 py-2.5 rounded-lg hover:bg-[#FF8855] transition-colors"
            >
              Explore Locations
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
