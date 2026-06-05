import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> تطبيق مواقيت الصلاة</Text>
      <Text style={styles.subtitle}>الإصدار 1.0.0</Text>
      <Text style={styles.subtitle}>تروندهايم، النرويج</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5fffd', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0d9e8a', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#06796a' },
});