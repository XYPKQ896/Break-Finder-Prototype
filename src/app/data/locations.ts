export interface Location {
  id: string;
  name: string;
  type: string;
  distance: number; // in meters
  walkingTime: number; // in minutes
  features: {
    warm: boolean;
    quiet: boolean;
    food: boolean;
    powerOutlets: boolean;
    comfortableSeating: boolean;
    studyFriendly: boolean;
  };
  crowdLevel: 'low' | 'moderate' | 'high';
  openingHours: string;
  description: string;
  imageUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const mockLocations: Location[] = [
  {
    id: '1',
    name: 'Tim Hortons - Sid Smith',
    type: 'Café',
    distance: 150,
    walkingTime: 2,
    features: {
      warm: true,
      quiet: false,
      food: true,
      powerOutlets: true,
      comfortableSeating: true,
      studyFriendly: false,
    },
    crowdLevel: 'moderate',
    openingHours: '7:00 AM - 8:00 PM',
    description: 'Warm indoor space with food and beverages. Perfect for a quick break.',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    coordinates: { lat: 43.6629, lng: -79.3990 }
  },
  {
    id: '2',
    name: 'Robarts Library - Study Lounge',
    type: 'Study Space',
    distance: 300,
    walkingTime: 4,
    features: {
      warm: true,
      quiet: true,
      food: false,
      powerOutlets: true,
      comfortableSeating: true,
      studyFriendly: true,
    },
    crowdLevel: 'low',
    openingHours: '8:00 AM - 11:00 PM',
    description: 'Quiet study area with comfortable seating and power outlets.',
    imageUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570',
    coordinates: { lat: 43.6644, lng: -79.3997 }
  },
  {
    id: '3',
    name: 'Hart House - Great Hall',
    type: 'Common Area',
    distance: 200,
    walkingTime: 3,
    features: {
      warm: true,
      quiet: false,
      food: true,
      powerOutlets: true,
      comfortableSeating: true,
      studyFriendly: false,
    },
    crowdLevel: 'high',
    openingHours: '7:00 AM - 10:00 PM',
    description: 'Historic student center with food options and comfortable seating.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    coordinates: { lat: 43.6638, lng: -79.3955 }
  },
  {
    id: '4',
    name: 'Bahen Centre - Atrium',
    type: 'Rest Area',
    distance: 400,
    walkingTime: 5,
    features: {
      warm: true,
      quiet: true,
      food: false,
      powerOutlets: true,
      comfortableSeating: true,
      studyFriendly: true,
    },
    crowdLevel: 'low',
    openingHours: '6:00 AM - 10:00 PM',
    description: 'Modern tech building atrium with natural light and seating.',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
    coordinates: { lat: 43.6595, lng: -79.3973 }
  },
  {
    id: '5',
    name: 'Gerstein Library Café',
    type: 'Café',
    distance: 250,
    walkingTime: 3,
    features: {
      warm: true,
      quiet: false,
      food: true,
      powerOutlets: true,
      comfortableSeating: true,
      studyFriendly: true,
    },
    crowdLevel: 'moderate',
    openingHours: '8:00 AM - 6:00 PM',
    description: 'Science library café with light meals and coffee. Good for studying.',
    imageUrl: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0',
    coordinates: { lat: 43.6612, lng: -79.3940 }
  },
  {
    id: '6',
    name: 'Medical Sciences Building - Lounge',
    type: 'Rest Area',
    distance: 500,
    walkingTime: 7,
    features: {
      warm: true,
      quiet: true,
      food: false,
      powerOutlets: false,
      comfortableSeating: true,
      studyFriendly: false,
    },
    crowdLevel: 'low',
    openingHours: '9:00 AM - 5:00 PM',
    description: 'Peaceful space for relaxation between classes.',
    imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597',
    coordinates: { lat: 43.6606, lng: -79.3933 }
  },
];

export interface ScheduleItem {
  id: string;
  type: 'class' | 'gap';
  startTime: string;
  endTime: string;
  title?: string;
  location?: string;
  duration: number; // in minutes
}

export const mockSchedule: ScheduleItem[] = [
  {
    id: '1',
    type: 'class',
    startTime: '9:00 AM',
    endTime: '10:00 AM',
    title: 'Computer Science Lecture',
    location: 'BA 1180',
    duration: 60
  },
  {
    id: '2',
    type: 'gap',
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    duration: 120
  },
  {
    id: '3',
    type: 'class',
    startTime: '12:00 PM',
    endTime: '1:00 PM',
    title: 'Mathematics Tutorial',
    location: 'MS 2172',
    duration: 60
  },
  {
    id: '4',
    type: 'gap',
    startTime: '1:00 PM',
    endTime: '2:00 PM',
    duration: 60
  },
  {
    id: '5',
    type: 'class',
    startTime: '2:00 PM',
    endTime: '4:00 PM',
    title: 'Physics Lab',
    location: 'MP 126',
    duration: 120
  },
];