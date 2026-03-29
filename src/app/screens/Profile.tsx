import { User } from 'lucide-react';

export function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F4F8] to-white pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* User Profile Card */}
        <div className="bg-gradient-to-br from-[#FF9966] to-[#FFB88C] rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">Student User</h2>
              <p className="text-white/80 text-sm">student@university.edu</p>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4">Your Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FF9966] mb-1">12</div>
              <div className="text-xs text-gray-600">Visits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FF9966] mb-1">3</div>
              <div className="text-xs text-gray-600">Classes</div>
            </div>
          </div>
        </div>

        {/* App Version */}
        <div className="text-center pt-4">
          <p className="text-sm text-gray-500">Break Finder</p>
          <p className="text-xs text-gray-400 mt-1">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}