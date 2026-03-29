import { User, Settings, Bell, HelpCircle, Info, LogOut } from 'lucide-react';

export function Profile() {
  const menuItems = [
    {
      icon: Settings,
      label: 'Settings',
      description: 'App preferences and configuration',
    },
    {
      icon: Bell,
      label: 'Notifications',
      description: 'Manage notification preferences',
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      description: 'Get help and contact support',
    },
    {
      icon: Info,
      label: 'About',
      description: 'App information and version',
    },
  ];

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
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FF9966] mb-1">5</div>
              <div className="text-xs text-gray-600">Saved Places</div>
            </div>
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

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
              >
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-medium text-gray-900">{item.label}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* App Version */}
        <div className="text-center">
          <p className="text-sm text-gray-500">Winter Break Finder</p>
          <p className="text-xs text-gray-400 mt-1">Version 1.0.0</p>
        </div>

        {/* Logout Button */}
        <button className="w-full flex items-center justify-center gap-2 bg-white text-red-600 font-medium py-3 rounded-xl border-2 border-red-200 hover:bg-red-50 transition-colors">
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </div>
    </div>
  );
}
