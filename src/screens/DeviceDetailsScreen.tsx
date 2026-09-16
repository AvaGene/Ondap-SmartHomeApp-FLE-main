import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/DevicesDetailsStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DeviceDetailsScreen() {
  return (
    <SafeAreaView> 
      <View style={styles.container}>
        <Text>Device Details</Text>
      </View>
    </SafeAreaView>
  );
}
