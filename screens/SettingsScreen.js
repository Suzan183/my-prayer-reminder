import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ الإعدادات</Text>
      <Text style={styles.subtitle}>قريباً...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5fffd', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0d9e8a', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#06796a' },
});