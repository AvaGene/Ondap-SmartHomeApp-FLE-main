import { View, Text, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { DeviceItem, RootStackParamList } from '../StackNavigator';
import styles from '../styles/DevicesStyle';

type Props = NativeStackScreenProps<RootStackParamList, 'Devices'>;

export default function DevicesScreen({ navigation }: Props) {
  const light: DeviceItem = {
    id: 'light', 
    name: 'Living Room Light', 
    label: 'Light', 
    location: 'Living Room', 
    status: 'ON', 
    icon: 'lightbulb', 
    accent: 'light',
  };
  const fan: DeviceItem = {
    id: 'fan', 
    name: 'Ceiling Fan', 
    label: 'Fan', 
    location: 'Bedroom', 
    status: 'OFF', 
    icon: 'fan', 
    accent: 'dark',
  };
  const ac: DeviceItem = {
    id: 'ac', 
    name: 'Air Conditioner', 
    label: 'AC', 
    location: 'Hallway', 
    status: 'OFF', 
    icon: 'snowflake', 
    accent: 'dark',
  };
  const door: DeviceItem = {
    id: 'door', 
    name: 'Front Door', 
    label: 'Door', 
    location: 'Entrance', 
    status: 'LOCKED', 
    icon: 'door-closed', 
    accent: 'dark',
  };

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
          <Pressable style={styles.deviceCard} onPress={() => navigation.navigate('DeviceDetails', { device: light })}>
            <View style={[styles.iconContainer, styles.activeIcon]}>
              <MaterialCommunityIcons name="lightbulb" size={30} color="#111111" />
            </View>
            <Text style={styles.deviceName}>Living Room Light</Text>
            <Text style={styles.deviceInfo}>Living Room</Text>
            <Text style={styles.statusText}>ON</Text>
          </Pressable>

          <Pressable style={styles.deviceCard} onPress={() => navigation.navigate('DeviceDetails', { device: fan })}>
            <View style={[styles.iconContainer, styles.inactiveIcon]}>
              <MaterialCommunityIcons name="fan" size={30} color="#111111" />
            </View>
            <Text style={styles.deviceName}>Ceiling Fan</Text>
            <Text style={styles.deviceInfo}>Bedroom</Text>
            <Text style={styles.statusText}>OFF</Text>
          </Pressable>

          <Pressable style={styles.deviceCard} onPress={() => navigation.navigate('DeviceDetails', { device: ac })}>
            <View style={[styles.iconContainer, styles.inactiveIcon]}>
              <MaterialCommunityIcons name="snowflake" size={30} color="#111111" />
            </View>
            <Text style={styles.deviceName}>Air Conditioner</Text>
            <Text style={styles.deviceInfo}>Hallway</Text>
            <Text style={styles.statusText}>OFF</Text>
          </Pressable>

          <Pressable style={styles.deviceCard} onPress={() => navigation.navigate('DeviceDetails', { device: door })}>
            <View style={[styles.iconContainer, styles.inactiveIcon]}>
              <MaterialCommunityIcons name="door-closed" size={30} color="#111111" />
            </View>
            <Text style={styles.deviceName}>Front Door</Text>
            <Text style={styles.deviceInfo}>Entrance</Text>
            <Text style={styles.statusText}>LOCKED</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}


