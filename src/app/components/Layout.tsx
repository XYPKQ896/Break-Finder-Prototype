import { Outlet, useLocation } from 'react-router';
import { BottomNav } from './BottomNav';

export function Layout() {
  const location = useLocation();
  
  // Hide bottom nav on certain screens
  const hideBottomNav = location.pathname.includes('/location/') || 
                        location.pathname.includes('/navigate/') ||
                        location.pathname.includes('/preferences') ||
                        location.pathname.includes('/schedule') ||
                        location.pathname.includes('/recommendations');

  return (
    <div className="min-h-screen bg-white">
      <Outlet />
      {!hideBottomNav && <BottomNav />}
    </div>
  );
}
