import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './App.css';
import NavMenu from './components/LayoutComponent/NavMenu';
import Footer from './components/LayoutComponent/Footer'
import { UserProvider } from './components/UserContext';
import { DistributorProvider } from './components/DistributorComponent/DistributorContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {


  return (
    <DistributorProvider>
    <UserProvider>
          <div className="App">
          
            <NavMenu></NavMenu>
            <ToastContainer />
            <Routes>
              {AppRoutes.map((route, index) => {
                const { element, ...rest } = route;
                return <Route key={index} {...rest} element={element} />;
              })}
            </Routes>
            
            
          </div>
    </UserProvider>
    
    </DistributorProvider>
  );
}
export default App;
