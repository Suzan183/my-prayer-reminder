import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { AppProvider } from './context/AppContext';
import PrayersScreen from './screens/PrayersScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';
import QiblaScreen from './screens/QiblaScreen';
import QiblaSearch from './screens/QiblaSearch';
import QiblaResult from './screens/QiblaResult';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function PrayersStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PrayersList" component={PrayersScreen} />
    </Stack.Navigator>
  );
}

// Stack جديد للقبلة
function QiblaStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="QiblaHome" component={QiblaScreen} />
      <Stack.Screen name="QiblaSearch" component={QiblaSearch} />
      <Stack.Screen name="QiblaResult" component={QiblaResult} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#ffffff',
              borderTopColor: '#0d9e8a',
              borderTopWidth: 1,
            },
            tabBarActiveTintColor: '#0d9e8a',
            tabBarInactiveTintColor: '#aaa',
          }}
        >
          <Tab.Screen
            name="الصلوات"
            component={PrayersStack}
            options={{ tabBarIcon: () => <Text>🕌</Text> }}
          />
          <Tab.Screen
            name="القبلة"
            component={QiblaStack}
            options={{ tabBarIcon: () => <Text>🕋</Text> }}
          />
          <Tab.Screen
            name="الإعدادات"
            component={SettingsScreen}
            options={{ tabBarIcon: () => <Text>⚙️</Text> }}
          />
          <Tab.Screen
            name="عن التطبيق"
            component={AboutScreen}
            options={{ tabBarIcon: () => <Text>ℹ️</Text> }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}