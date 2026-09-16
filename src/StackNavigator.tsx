import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { Dispatch, SetStateAction } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DevicesScreen from './screens/DevicesScreen';
import DeviceDetailsScreen from './screens/DeviceDetailsScreen';

export type DeviceStatus = 'ON' | 'OFF' | 'LOCKED';
export type DeviceIcon = 'lightbulb' | 'fan' | 'snowflake' | 'door-closed';

export type DeviceItem = {
  id: string;
  name: string;
  location: string;
  status: DeviceStatus;
  icon: DeviceIcon;
};

export type RootStackParamList = {
  Home: undefined;
  Devices: { updatedDevice?: DeviceItem } | undefined;
  DeviceDetails: { device: DeviceItem };
};

export type StackNavigatorProps = {
  devices: DeviceItem[];
  setDevices: Dispatch<SetStateAction<DeviceItem[]>>;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DevicesScreenProps = NativeStackScreenProps<RootStackParamList, 'Devices'>;
type DeviceDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'DeviceDetails'>;

export default function StackNavigator({ devices, setDevices }: StackNavigatorProps) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={(props: HomeScreenProps) => <HomeScreen {...props} devices={devices} />}
      />
      <Stack.Screen
        name="Devices"
        options={{ headerShown: false }}
        component={(props: DevicesScreenProps) => <DevicesScreen {...props} devices={devices} setDevices={setDevices} />}
      />
      <Stack.Screen
        name="DeviceDetails"
        options={{ headerShown: false }}
        component={(props: DeviceDetailsScreenProps) => <DeviceDetailsScreen {...props} devices={devices} setDevices={setDevices} />}
      />
    </Stack.Navigator>
  );
}