import { View, Text, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { DeviceItem, RootStackParamList } from '../StackNavigator';
import styles from '../styles/HomeStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'> & {
  devices: DeviceItem[];
};

export default function HomeScreen({ navigation, devices }: Props) {
  const homeDevices = [
    { ...devices.find((device) => device.id === 'light')!, label: 'Light', icon: 'lightbulb', accent: 'light' },
    { ...devices.find((device) => device.id === 'fan')!, label: 'Fan', icon: 'fan', accent: 'dark' },
    { ...devices.find((device) => device.id === 'ac')!, label: 'AC', icon: 'snowflake', accent: 'dark' },
    { ...devices.find((device) => device.id === 'door')!, label: 'Door', icon: 'door-closed', accent: 'dark' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <View style={styles.homeBadge}>
            <MaterialCommunityIcons name="home" size={22} color="#111111" />
          </View>
          <View style={styles.headerTextWrap}>
            <Text style={styles.title}>Smart Home{"\n"}Dashboard</Text>
            <Text style={styles.subtitle}>Welcome, Student!</Text>
          </View>
        </View>

        <View style={styles.grid}>
          {homeDevices.map((device) => (
            <Pressable key={device.id} style={styles.card}>
              <View style={[styles.deviceIconContainer, device.accent === 'light' ? styles.lightAccent : styles.darkAccent]}>
                <MaterialCommunityIcons name={device.icon as any} size={28} color="#111111" />
              </View>
              <Text style={styles.deviceName}>{device.label}</Text>
              <Text style={styles.deviceStatus}>{device.status}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Devices')}>
          <MaterialCommunityIcons name="view-list" size={18} color="#ffffff" />
          <Text style={styles.primaryButtonText}>VIEW DEVICES</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}