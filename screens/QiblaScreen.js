import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function QiblaScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🕋</Text>
      <Text style={styles.title}>اتجاه القبلة</Text>
      <Text style={styles.subtitle}>اعرف اتجاه القبلة من مدينتك</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('QiblaSearch')}
      >
        <Text style={styles.buttonText}>🔍 ابحث عن القبلة</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5fffd', alignItems: 'center', justifyContent: 'center', padding: 30 },
  icon: { fontSize: 80, marginBottom: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#0d9e8a', marginBottom: 10 },
  subtitle: { fontSize: 16, color: '#06796a', marginBottom: 40, textAlign: 'center' },
  button: { backgroundColor: '#0d9e8a', padding: 15, borderRadius: 12, width: '100%', alignItems: 'center' },
  buttonText: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
});