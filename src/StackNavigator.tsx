import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DevicesScreen from './screens/DevicesScreen';
import DeviceDetailsScreen from './screens/DeviceDetailsScreen';

export type DeviceItem = {
  id: string;
  name: string;
  label: string;
  location: string;
  status: 'ON' | 'OFF' | 'LOCKED';
  icon: 'lightbulb' | 'fan' | 'snowflake' | 'door-closed';
  accent: 'light' | 'dark';
};

export type RootStackParamList = {
  Home: undefined;
  Devices: undefined;
  DeviceDetails: { device: DeviceItem };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Devices"
        options={{ headerShown: false }}
        component={DevicesScreen}
      />
      <Stack.Screen
        name="DeviceDetails"
        options={{ headerShown: false }}
        component={DeviceDetailsScreen}
      />
    </Stack.Navigator>
  );
}