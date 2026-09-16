import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DevicesScreen from './screens/DevicesScreen';
import DeviceDetailsScreen from './screens/DeviceDetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  Device: undefined;
  DeviceDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Device" component={DevicesScreen} />
      <Stack.Screen name="DeviceDetails" component={DeviceDetailsScreen} />
    </Stack.Navigator>
  );
}