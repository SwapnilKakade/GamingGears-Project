import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [custid, setCustid] = useState(null); // Initialize custid as needed
 
  return (
    <UserContext.Provider value={{ custid, setCustid }}>
      {children}
    </UserContext.Provider>
  );
}
