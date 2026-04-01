import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './screens/Home';
import { Preferences } from './screens/Preferences';
import { Schedule } from './screens/Schedule';
import { Recommendations } from './screens/Recommendations';
import { LocationDetail } from './screens/LocationDetail';
import { NavigationScreen } from './screens/NavigationScreen';
import { SavedLocations } from './screens/SavedLocations';
import { Profile } from './screens/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'preferences', Component: Preferences },
      { path: 'schedule', Component: Schedule },
      { path: 'recommendations', Component: Recommendations },
      { path: 'location/:id', Component: LocationDetail },
      { path: 'navigate/:id', Component: NavigationScreen },
      { path: 'saved', Component: SavedLocations },
      { path: 'profile', Component: Profile },
    ],
  },
]);