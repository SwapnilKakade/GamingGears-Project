import React, { createContext, useState, useContext } from 'react';

const DistributorContext = createContext();

export function useDistributor() {
  return useContext(DistributorContext);
}

export function DistributorProvider({ children }) {
  const [disid, setDisid] = useState(null); // Initialize disid as needed
 
  return (
    <DistributorContext.Provider value={{ disid, setDisid }}>
      {children}
    </DistributorContext.Provider>
  );
}
