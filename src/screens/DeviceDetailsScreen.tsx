import { View, Text, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { RootStackParamList } from '../StackNavigator';
import styles from '../styles/DevicesDetailsStyle';

type Props = NativeStackScreenProps<RootStackParamList, 'DeviceDetails'>;

export default function DeviceDetailsScreen({ route, navigation }: Props) {
  const selectedDevice = route.params.device;

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
          <View
            style={[
              styles.iconWrapper,
              selectedDevice.status === 'ON'
                ? styles.activeIcon
                : selectedDevice.status === 'LOCKED'
                  ? styles.lockedIcon
                  : styles.inactiveIcon,
            ]}
          >
            <MaterialCommunityIcons name={selectedDevice.icon} size={46} color="#111111" />
          </View>

          <Text style={styles.deviceName}>{selectedDevice.name}</Text>
          <Text style={styles.deviceStatus}>Status: {selectedDevice.status}</Text>

          <View style={styles.actionRow}>
            <View style={styles.actionButton}>
              <MaterialCommunityIcons name="power" size={18} color="#111111" />
              <Text style={styles.actionText}>Power</Text>
            </View>

            <View style={styles.actionButton}>
              <MaterialCommunityIcons name="cog" size={18} color="#111111" />
              <Text style={styles.actionText}>Settings</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
