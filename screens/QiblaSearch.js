import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function QiblaSearch() {
  const [city, setCity] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 ابحث عن مدينتك</Text>

      <TextInput
        style={styles.input}
        placeholder="مثال: Trondheim"
        placeholderTextColor="#aaa"
        value={city}
        onChangeText={setCity}
      />

      <TouchableOpacity
        style={[styles.button, !city && styles.buttonDisabled]}
        onPress={() => {
          if (city) navigation.navigate('QiblaResult', { city });
        }}
      >
        <Text style={styles.buttonText}>ابحث</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← رجوع</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5fffd', alignItems: 'center', justifyContent: 'center', padding: 30 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#0d9e8a', marginBottom: 30 },
  input: { width: '100%', backgroundColor: '#ffffff', padding: 15, borderRadius: 12, fontSize: 18, marginBottom: 20, borderWidth: 1, borderColor: '#0d9e8a', color: '#1a2e2b' },
  button: { backgroundColor: '#0d9e8a', padding: 15, borderRadius: 12, width: '100%', alignItems: 'center', marginBottom: 15 },
  buttonDisabled: { backgroundColor: '#aaa' },
  buttonText: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
  backButton: { marginTop: 10 },
  backText: { color: '#0d9e8a', fontSize: 16 },
});