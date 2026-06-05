import { createContext, useContext, useState, useEffect  } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Creating the Context
const AppContext = createContext();

// The Provider — wraps the application and provides the data
export function AppProvider({ children }) {
  const [city, setCity] = useState('Trondheim');
  const [country, setCountry] = useState('Norway');
  
  // When you open the application — read the saved data
  useEffect(()=>{
    loadSettings();
  },[]);

  const loadSettings  = async () => {
    try{
        const savedCity=  await AsyncStorage.getItem('city');
        const savedCountry = await AsyncStorage.getItem('country');

        if(savedCity) setCity(savedCity);
        if(savedCountry) setCountry(savedCountry);
    }
    catch(err){
        console.log('خطأ في القراءة:', err);
    }
  };

  // A function that saves and updates the city simultaneously
  const  updateCity= async (newCity) =>{
    setCity(newCity);
    await AsyncStorage.setItem('city', newCity);
  };
// A function that saves and updates the country simultaneously
  const updateCountry = async (newCountry) =>{
    setCountry(newCountry);
    await AsyncStorage.setItem('country', newCountry);
  };

  return (
    <AppContext.Provider value={{ city, updateCity, country, updateCountry }}>
      {children}
    </AppContext.Provider>
  );
}


export function useApp() {
  return useContext(AppContext);
}