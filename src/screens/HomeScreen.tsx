import { View, Text, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../StackNavigator';
import styles from '../styles/HomeStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const devices = [
  { name: 'Light', icon: 'lightbulb', status: 'ON', accent: 'light' },
  { name: 'Fan', icon: 'fan', status: 'OFF', accent: 'dark' },
  { name: 'AC', icon: 'snowflake', status: 'OFF', accent: 'dark' },
  { name: 'Door', icon: 'door-closed', status: 'LOCKED', accent: 'dark' },
] as const;

export default function HomeScreen({ navigation }: Props) {
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
          {devices.map((device) => (
            <Pressable key={device.name} style={styles.card}>
              <View
                style={[
                  styles.deviceIconContainer,
                  device.accent === 'light' ? styles.lightAccent : styles.darkAccent,
                ]}
              >
                <MaterialCommunityIcons
                  name={device.icon}
                  size={28}
                  color="#111111"
                />
              </View>
              <Text style={styles.deviceName}>{device.name}</Text>
              <Text style={styles.deviceStatus}>{device.status}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Device')}>
          <MaterialCommunityIcons name="view-list" size={18} color="#ffffff" />
          <Text style={styles.primaryButtonText}>VIEW DEVICES</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}