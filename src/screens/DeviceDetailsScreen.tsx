import { View, Text, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import type { DeviceItem, DeviceStatus, RootStackParamList } from '../StackNavigator';
import styles from '../styles/DevicesDetailsStyle';

type Props = NativeStackScreenProps<RootStackParamList, 'DeviceDetails'> & {
  devices: DeviceItem[];
  setDevices: React.Dispatch<React.SetStateAction<DeviceItem[]>>;
};

export default function DeviceDetailsScreen({ route, navigation, devices, setDevices }: Props) {
  const [selectedDevice, setSelectedDevice] = useState(route.params.device);

  useEffect(() => {
    const currentDevice = devices.find((device) => device.id === route.params.device.id);
    setSelectedDevice(currentDevice ?? route.params.device);
  }, [devices, route.params.device]);

  const toggleDeviceState = () => {
    const nextStatus: DeviceStatus =
      selectedDevice.status === 'ON' ? 'OFF' : selectedDevice.status === 'OFF' ? 'ON' : 'LOCKED';

    const updatedDevice = { ...selectedDevice, status: nextStatus };

    setSelectedDevice(updatedDevice);
    setDevices((currentDevices) =>
      currentDevices.map((device) => (device.id === updatedDevice.id ? updatedDevice : device)),
    );
    navigation.navigate('Devices', { updatedDevice });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
            <MaterialCommunityIcons name="chevron-left" size={28} color="#111111" />
          </Pressable>
          <Text style={styles.headerTitle}>Device Details</Text>
        </View>

        <View style={styles.card}>
          <View style={[styles.iconWrapper, selectedDevice.status === 'ON' ? styles.activeIcon : styles.inactiveIcon]}>
            <MaterialCommunityIcons name={selectedDevice.icon} size={46} color="#111111" />
          </View>

          <Text style={styles.deviceName}>{selectedDevice.name}</Text>
          <Text style={styles.deviceStatus}>Status: {selectedDevice.status}</Text>

          <View style={styles.actionRow}>
            <Pressable style={styles.actionButton} onPress={toggleDeviceState}>
              <MaterialCommunityIcons name="power" size={18} color="#111111" />
              <Text style={styles.actionText}>{selectedDevice.status === 'ON' ? 'Turn Off' : 'Turn On'}</Text>
            </Pressable>

            <Pressable style={styles.actionButton}>
              <MaterialCommunityIcons name="cog" size={18} color="#111111" />
              <Text style={styles.actionText}>Settings</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
