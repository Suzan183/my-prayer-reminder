import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

function PrayerCard({ name, time, icon, prayed, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.card, prayed && styles.cardDone]}
      onPress={onPress}
    >
      <Text style={styles.prayerIcon}>{icon}</Text>
      <Text style={styles.prayerName}>{name}</Text>
      <Text style={styles.prayerTime}>{prayed ? '✅ تمت' : time}</Text>
    </TouchableOpacity>
  );
}

export default function PrayersScreen() {
  const { city, country } = useApp();
  const [prayers, setPrayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPrayerTimes();
  }, [city, country]);

  const fetchPrayerTimes = async () => {
    try {
      const response = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=3`
      );
      const data = await response.json();
      const timings = data.data.timings;

      setPrayers([
        { id: 1, name: 'الفجر',  time: timings.Fajr,    icon: '🌙', prayed: false },
        { id: 2, name: 'الظهر',  time: timings.Dhuhr,   icon: '☀️', prayed: false },
        { id: 3, name: 'العصر',  time: timings.Asr,     icon: '🌤️', prayed: false },
        { id: 4, name: 'المغرب', time: timings.Maghrib, icon: '🌅', prayed: false },
        { id: 5, name: 'العشاء', time: timings.Isha,    icon: '🌃', prayed: false },
      ]);
    } catch (err) {
      setError('تعذّر جلب المواقيت، تحقق من الإنترنت');
    } finally {
      setLoading(false);
    }
  };

  const togglePrayer = (id) => {
    setPrayers(prayers.map(p =>
      p.id === id ? { ...p, prayed: !p.prayed } : p
    ));
  };

  const count = prayers.filter(p => p.prayed).length;

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#e2b96f" />
        <Text style={styles.loadingText}>جاري جلب مواقيت الصلاة...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={prayers}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <PrayerCard
            name={item.name}
            time={item.time}
            icon={item.icon}
            prayed={item.prayed}
            onPress={() => togglePrayer(item.id)}
          />
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>🕌 مواقيت الصلاة</Text>
            <Text style={styles.city}>📍 {city}</Text>
            <Text style={styles.counter}>✅ صلوات تمّت: {count} من 5</Text>
          </View>
        }
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5fffd' },
  centered: { flex: 1, backgroundColor: '#f5fffd', alignItems: 'center', justifyContent: 'center' },
  list: { padding: 20, paddingTop: 60 },
  header: { alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 34, fontWeight: 'bold', color: '#0d9e8a', marginBottom: 5 },
  city: { fontSize: 16, color: '#06796a', marginBottom: 5 },
  counter: { fontSize: 16, color: '#0d9e8a', fontWeight: 'bold', marginBottom: 10 },
  loadingText: { color: '#0d9e8a', marginTop: 15, fontSize: 16 },
  errorText: { color: '#ff6b6b', fontSize: 16, textAlign: 'center', padding: 20 },
  card: {
    backgroundColor: '#ffffff',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#0d9e8a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardDone: { backgroundColor: '#e8faf7', opacity: 0.9 },
  prayerName: { fontSize: 18, color: '#1a2e2b', fontWeight: 'bold', flex: 1, marginLeft: 10 },
  prayerTime: { fontSize: 16, color: '#06796a' },
  prayerIcon: { fontSize: 20 },
});