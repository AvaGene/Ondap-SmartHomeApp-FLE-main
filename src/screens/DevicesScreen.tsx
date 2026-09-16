import { View, Text, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { DeviceItem, RootStackParamList } from '../StackNavigator';
import styles from '../styles/DevicesStyle';

type Props = NativeStackScreenProps<RootStackParamList, 'Devices'> & {
  devices: DeviceItem[];
  setDevices: React.Dispatch<React.SetStateAction<DeviceItem[]>>;
};

export default function DevicesScreen({ navigation, route, devices, setDevices }: Props) {
  const updatedDevice = route.params?.updatedDevice;

  if (updatedDevice) {
    const nextDevices = devices.map((device) =>
      device.id === updatedDevice.id ? { ...device, ...updatedDevice } : device,
    );

    if (JSON.stringify(nextDevices) !== JSON.stringify(devices)) {
      setDevices(nextDevices);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
            <MaterialCommunityIcons name="chevron-left" size={24} color="#111111" />
          </Pressable>
          <Text style={styles.headerTitle}>Devices</Text>
        </View>

        <View style={styles.grid}>
          {devices.map((device) => (
            <Pressable
              key={device.id}
              style={styles.deviceCard}
              onPress={() => navigation.navigate('DeviceDetails', { device: { ...device } })}
            >
              <View style={[styles.iconContainer, device.status === 'ON' ? styles.activeIcon : styles.inactiveIcon]}>
                <MaterialCommunityIcons name={device.icon} size={30} color="#111111" />
              </View>
              <Text style={styles.deviceName}>{device.name}</Text>
              <Text style={styles.deviceInfo}>{device.location}</Text>
              <Text style={styles.statusText}>{device.status}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}


