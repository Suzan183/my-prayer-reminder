import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function QiblaResult({ route }) {
  const { city } = route.params;
  const [qibla, setQibla] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    fetchQibla();
  }, []);

  const fetchQibla = async () => {
    try {
      const response = await fetch(
        `https://api.aladhan.com/v1/qibla/48.8566/2.3522`
      );
      const data = await response.json();
      setQibla(Math.round(data.data.direction));
    } catch {
      setQibla('خطأ في الجلب');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🕋</Text>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.label}>اتجاه القبلة</Text>
      <Text style={styles.degree}>
        {loading ? '...' : `${qibla}°`}
      </Text>
      <Text style={styles.hint}>من الشمال باتجاه عقارب الساعة</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← رجوع</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5fffd', alignItems: 'center', justifyContent: 'center', padding: 30 },
  icon: { fontSize: 80, marginBottom: 20 },
  city: { fontSize: 24, fontWeight: 'bold', color: '#0d9e8a', marginBottom: 5 },
  label: { fontSize: 18, color: '#06796a', marginBottom: 10 },
  degree: { fontSize: 64, fontWeight: 'bold', color: '#1a2e2b', marginBottom: 10 },
  hint: { fontSize: 14, color: '#888', marginBottom: 40 },
  button: { backgroundColor: '#0d9e8a', padding: 15, borderRadius: 12, width: '100%', alignItems: 'center' },
  buttonText: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
});