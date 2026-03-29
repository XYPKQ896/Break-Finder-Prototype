import { ArrowLeft, Upload, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { useNavigate } from 'react-router';
import { mockSchedule } from '../data/locations';

export function Schedule() {
  const navigate = useNavigate();

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
            <h1 className="text-2xl font-bold text-gray-900">My Schedule</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* Upload Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Upload Schedule</h2>
          <div className="grid gap-3">
            <button className="flex items-center justify-center gap-2 bg-[#A5D8E8] text-gray-800 font-medium py-3 rounded-xl hover:bg-[#95C8D8] transition-colors">
              <Upload className="w-5 h-5" />
              Upload Schedule File
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#B8E6D5] text-gray-800 font-medium py-3 rounded-xl hover:bg-[#A8D6C5] transition-colors">
              <CalendarIcon className="w-5 h-5" />
              Import from Calendar
            </button>
          </div>
        </div>

        {/* Today's Schedule */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-semibold text-gray-900 mb-4">Today's Schedule</h2>
          <div className="space-y-3">
            {mockSchedule.map((item) => (
              <div
                key={item.id}
                className={`
                  rounded-xl p-4 border-2
                  ${item.type === 'gap' 
                    ? 'bg-orange-50 border-orange-200' 
                    : 'bg-blue-50 border-blue-200'
                  }
                `}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className={`w-4 h-4 ${item.type === 'gap' ? 'text-orange-600' : 'text-blue-600'}`} />
                      <span className={`text-sm font-medium ${item.type === 'gap' ? 'text-orange-900' : 'text-blue-900'}`}>
                        {item.startTime} – {item.endTime}
                      </span>
                    </div>
                    
                    {item.type === 'class' ? (
                      <>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.location}</p>
                      </>
                    ) : (
                      <>
                        <h3 className="font-semibold text-orange-900 mb-2">
                          Gap Detected ({item.duration} minutes)
                        </h3>
                        <button
                          onClick={() => navigate('/recommendations')}
                          className="bg-[#FF9966] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#FF8855] transition-colors"
                        >
                          Find Places for This Gap
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-gradient-to-br from-[#FF9966] to-[#FFB88C] rounded-2xl p-6 text-white shadow-lg">
          <h3 className="font-semibold mb-2">Summary</h3>
          <div className="space-y-1 text-sm">
            <p>Total classes: 3</p>
            <p>Total gaps: 2</p>
            <p>Longest gap: 2 hours (10:00 AM - 12:00 PM)</p>
          </div>
        </div>

        {/* Tip Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-3">💡 Tip</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            For short gaps (under 15 minutes), we recommend finding nearby warm spots to relax. 
            For longer gaps, you can explore places with food, study spaces, or comfortable seating.
          </p>
        </div>
      </div>
    </div>
  );
}