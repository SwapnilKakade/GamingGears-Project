import React, { useState, useEffect } from 'react';
import './DistributorDashboard.css'; 
import AddProduct from './AddProduct';
import Product from './Product';
import SalesReport from './SalesReport'
import Orders from './Orders'
import { useDistributor } from './DistributorContext';
import DistributorService from '../../service/DistributorService';
import {  useNavigate } from 'react-router-dom';
const DistributorHome = () => {

    const [board, setBoard] = useState('Product');
    const [distributorInfo, setDistributorInfo] = useState(null);
    const navigate = useNavigate()
    const handleItemClick = (item) => {
        setBoard(item);
    };


    const { disid } = useDistributor();
    const { setDisid } = useDistributor();
  
    useEffect(() => {
  
        DistributorService.getDistributorById(disid)
            .then((response) => {
                setDistributorInfo(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        //    findTotalSale


    }, [disid]);

    const handleLogout=()=>{

        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
         
          setDisid(0);
        navigate("/distributor-login")
        }

        

    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className="sidebar">
                {/* Distributor Profile */}
                <div className="profile-card">
                    {distributorInfo ? (
                        <h3 style={{ color: 'rgba(51, 51, 51, 0.8)' }}> {distributorInfo.disname}</h3>
                    ) : (
                        <p>Loading distributor info...</p>
                    )}
                    {/* Display distributor information here */}
                </div>

                {/* Navigation Links */}
                <ul className="nav-links">

                    <li className={`nav-link ${board === 'Product' ? 'active' : ''}`} onClick={() => handleItemClick('Product')} style={{height:'40px'}}>
                        Products
                    </li>
                    <li className={`nav-link ${board === 'AddProduct' ? 'active' : ''}`} onClick={() => handleItemClick('AddProduct')} style={{height:'40px'}}>
                        Add Product
                    </li>
                    <li className={`nav-link ${board === 'Orders' ? 'active' : ''}`} onClick={() => handleItemClick('Orders')} style={{height:'40px'}}>Orders</li>
                    <li className={`nav-link ${board === 'logout' ? 'active' : ''}`} onClick={handleLogout} style={{height:'40px'}}>LogOut</li>
                    
                </ul>
            </div>

            {/* Main Content */}
            <div className="main-content">
               
                

                {/* Content Area */}
                {board === 'AddProduct' && <AddProduct></AddProduct>}
                {board === 'Product' && <Product />}
                {board === 'SalesReport' && <SalesReport />}
                {board === 'Orders' && <Orders />}
            </div>
        </div>
    );
};

export default DistributorHome;
