import { ArrowLeft, SlidersHorizontal, Search } from 'lucide-react';
import { useNavigate } from 'react-router';
import { mockLocations } from '../data/locations';
import { LocationCard } from '../components/LocationCard';
import { usePreferences } from '../hooks/usePreferences';
import { useState } from 'react';

export function Recommendations() {
  const navigate = useNavigate();
  const { preferences } = usePreferences();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter locations based on preferences and search
  const filteredLocations = mockLocations.filter(location => {
    // Check search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        location.name.toLowerCase().includes(query) ||
        location.building.toLowerCase().includes(query) ||
        location.type.toLowerCase().includes(query);
      
      if (!matchesSearch) return false;
    }
    
    // Check environment preferences
    if (preferences.environment.warm && !location.features.warm) return false;
    if (preferences.environment.quiet && !location.features.quiet) return false;
    if (preferences.environment.food && !location.features.food) return false;
    if (preferences.environment.powerOutlets && !location.features.powerOutlets) return false;
    
    // Check comfort preferences
    if (preferences.comfort.comfortableSeating && !location.features.comfortableSeating) return false;
    if (preferences.comfort.studyFriendly && !location.features.studyFriendly) return false;
    
    // Check crowd level
    if (preferences.crowdLevel !== 'any' && location.crowdLevel !== preferences.crowdLevel) return false;
    
    return true;
  });

  // Sort by distance
  const sortedLocations = [...filteredLocations].sort((a, b) => a.distance - b.distance);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F4F8] to-white pb-20">
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
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Find Places</h1>
              <p className="text-sm text-gray-600 mt-0.5">Search or browse nearby locations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-md mx-auto px-6 py-4 space-y-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search buildings or places..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9966]/20 focus:border-[#FF9966] transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Filter Button */}
        <button
          onClick={() => navigate('/preferences')}
          className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Filter Preferences</span>
        </button>
      </div>

      {/* Results */}
      <div className="max-w-md mx-auto px-6 pb-6">
        {sortedLocations.length > 0 ? (
          <div className="space-y-4">
            {sortedLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
            <p className="text-gray-600 mb-4">No locations match your preferences</p>
            <button
              onClick={() => navigate('/preferences')}
              className="text-[#FF9966] font-medium hover:underline"
            >
              Adjust your preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
}