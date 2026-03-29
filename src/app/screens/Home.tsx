import { MapPin, Calendar, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router';
import { mockSchedule } from '../data/locations';

export function Home() {
  const navigate = useNavigate();

  // Get next class and current gap info
  const now = new Date();
  const currentHour = now.getHours();
  
  const nextClass = mockSchedule.find(item => {
    if (item.type === 'class') {
      const hour = parseInt(item.startTime.split(':')[0]);
      const isPM = item.startTime.includes('PM') && !item.startTime.includes('12:');
      const adjustedHour = isPM ? hour + 12 : hour;
      return adjustedHour >= currentHour;
    }
    return false;
  });

  const currentGap = mockSchedule.find(item => item.type === 'gap');

  const mainButtons = [
    {
      icon: MapPin,
      title: 'Find Places',
      description: 'Search or browse warm places nearby',
      color: 'bg-gradient-to-br from-[#FF9966] to-[#FFB88C]',
      onClick: () => navigate('/recommendations'),
    },
    {
      icon: Calendar,
      title: 'Find by Schedule',
      description: 'Analyze class schedule and detect gaps',
      color: 'bg-gradient-to-br from-[#A5D8E8] to-[#D4E8F0]',
      textColor: 'text-gray-800',
      onClick: () => navigate('/schedule'),
    },
    {
      icon: SlidersHorizontal,
      title: 'Preferences',
      description: 'Set environment preferences',
      color: 'bg-gradient-to-br from-[#E8D5F2] to-[#F2E8F7]',
      textColor: 'text-gray-800',
      onClick: () => navigate('/preferences'),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E8F4F8] to-white pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Winter Break Finder</h1>
          <div className="mt-3 space-y-1">
            {nextClass && (
              <p className="text-sm text-gray-600">
                Next class: <span className="font-medium text-gray-900">{nextClass.startTime}</span>
              </p>
            )}
            {currentGap && (
              <p className="text-sm text-gray-600">
                Current gap: <span className="font-medium text-[#FF9966]">{currentGap.duration} minutes</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-6 py-6">
        <div className="grid gap-4">
          {mainButtons.map((button, index) => {
            const Icon = button.icon;
            return (
              <button
                key={index}
                onClick={button.onClick}
                className={`${button.color} ${button.textColor || 'text-white'} rounded-2xl p-6 shadow-lg active:scale-98 transition-all text-left`}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold mb-1">{button.title}</h2>
                    <p className="text-sm opacity-90">{button.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Quick Tips */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3">Quick Tips</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-[#FF9966] mt-0.5">•</span>
              <span>Set your preferences to get better recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9966] mt-0.5">•</span>
              <span>Upload your schedule for automatic gap detection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF9966] mt-0.5">•</span>
              <span>Save your favorite spots for quick access</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}