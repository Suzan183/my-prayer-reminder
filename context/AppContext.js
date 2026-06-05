import { createContext, useContext, useState } from 'react';

// Creating the Context
const AppContext = createContext();

// The Provider — wraps the application and provides the data
export function AppProvider({ children }) {
  const [city, setCity] = useState('Trondheim');
  const [country, setCountry] = useState('Norway');

  return (
    <AppContext.Provider value={{ city, setCity, country, setCountry }}>
      {children}
    </AppContext.Provider>
  );
}


export function useApp() {
  return useContext(AppContext);
}