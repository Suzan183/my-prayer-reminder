import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function SettingsScreen() {
  const { city, setCity, country, setCountry } = useApp();
  const [tempCity, setTempCity] = useState(city);
  const [tempCountry, setTempCountry] = useState(country);

  const saveSettings = () => {
    setCity(tempCity);
    setCountry(tempCountry);
    alert('✅ تم حفظ الإعدادات!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ الإعدادات</Text>

      <Text style={styles.label}>المدينة</Text>
      <TextInput
        style={styles.input}
        value={tempCity}
        onChangeText={setTempCity}
        placeholder="مثال: Trondheim"
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>الدولة</Text>
      <TextInput
        style={styles.input}
        value={tempCountry}
        onChangeText={setTempCountry}
        placeholder="مثال: Norway"
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.button} onPress={saveSettings}>
        <Text style={styles.buttonText}>💾 حفظ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5fffd', alignItems: 'center', justifyContent: 'center', padding: 30 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#0d9e8a', marginBottom: 30 },
  label: { alignSelf: 'flex-start', fontSize: 16, color: '#06796a', marginBottom: 5, fontWeight: 'bold' },
  input: { width: '100%', backgroundColor: '#ffffff', padding: 15, borderRadius: 12, fontSize: 16, marginBottom: 20, borderWidth: 1, borderColor: '#0d9e8a', color: '#1a2e2b' },
  button: { backgroundColor: '#0d9e8a', padding: 15, borderRadius: 12, width: '100%', alignItems: 'center' },
  buttonText: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
});