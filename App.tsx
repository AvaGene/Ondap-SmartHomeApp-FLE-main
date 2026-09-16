import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import StackNavigator from './src/StackNavigator';
import type { DeviceItem } from './src/StackNavigator';

const initialDevices: DeviceItem[] = [
  { id: 'light', name: 'Living Room Light', location: 'Living Room', status: 'ON', icon: 'lightbulb' },
  { id: 'fan', name: 'Ceiling Fan', location: 'Bedroom', status: 'OFF', icon: 'fan' },
  { id: 'ac', name: 'Air Conditioner', location: 'Hallway', status: 'OFF', icon: 'snowflake' },
  { id: 'door', name: 'Front Door', location: 'Entrance', status: 'LOCKED', icon: 'door-closed' },
];

export default function App() {
  const [devices, setDevices] = useState<DeviceItem[]>(initialDevices);

  return (
    <NavigationContainer>
      <StackNavigator devices={devices} setDevices={setDevices} />
    </NavigationContainer>
  );
}