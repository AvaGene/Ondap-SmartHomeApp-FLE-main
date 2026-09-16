import { View, Text, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../StackNavigator';
import styles from '../styles/HomeStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

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
          <Pressable style={styles.card}>
            <View style={[styles.deviceIconContainer, styles.lightAccent]}>
              <MaterialCommunityIcons name="lightbulb" size={28} color="#111111" />
            </View>
            <Text style={styles.deviceName}>Light</Text>
            <Text style={styles.deviceStatus}>ON</Text>
          </Pressable>

          <Pressable style={styles.card}>
            <View style={[styles.deviceIconContainer, styles.darkAccent]}>
              <MaterialCommunityIcons name="fan" size={28} color="#111111" />
            </View>
            <Text style={styles.deviceName}>Fan</Text>
            <Text style={styles.deviceStatus}>OFF</Text>
          </Pressable>

          <Pressable style={styles.card}>
            <View style={[styles.deviceIconContainer, styles.darkAccent]}>
              <MaterialCommunityIcons name="snowflake" size={28} color="#111111" />
            </View>
            <Text style={styles.deviceName}>AC</Text>
            <Text style={styles.deviceStatus}>OFF</Text>
          </Pressable>

          <Pressable style={styles.card}>
            <View style={[styles.deviceIconContainer, styles.darkAccent]}>
              <MaterialCommunityIcons name="door-closed" size={28} color="#111111" />
            </View>
            <Text style={styles.deviceName}>Door</Text>
            <Text style={styles.deviceStatus}>LOCKED</Text>
          </Pressable>
        </View>

        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Devices')}>
          <MaterialCommunityIcons name="view-list" size={18} color="#ffffff" />
          <Text style={styles.primaryButtonText}>VIEW DEVICES</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}