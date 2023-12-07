import React, { useState, useEffect } from 'react';
import '../DistributorComponent/DistributorDashboard.css';

import Expert from "./Expert.js"
import Distributor from "./Distributor.js"
import SalesReport from './SalesReport'
import Product from "./Product.js"
import { useNavigate } from 'react-router-dom';

const AdminDashBoard = () => {
    const [board, setBoard] = useState('Distributor');
    const [adminInfo, setAdminInfo] = useState("");
    const navigate = useNavigate();

    const handleItemClick = (item) => {
        setBoard(item);
    };

    useEffect(() => {
        const storedAdmin = sessionStorage.getItem('admin');
        
        if (storedAdmin !== null) {
            setAdminInfo(storedAdmin);
        } else {
            // Admin info not found, navigate to admin login
            navigate("/adminlogin");
        }
    }, [navigate]);

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            sessionStorage.removeItem('admin');
            navigate("/adminlogin");
        }
    }

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            {adminInfo && ( // Render the sidebar only if adminInfo is present
                <div className="sidebar">
                    {/* Distributor Profile */}
                    <div className="profile-card">
                        <h3 style={{ color: 'rgba(51, 51, 51, 0.8)' }}>{adminInfo}</h3>
                    </div>

                    {/* Navigation Links */}
                    <ul className="nav-links">
                        <li className={`nav-link ${board === 'Distributor' ? 'active' : ''}`} onClick={() => handleItemClick('Distributor')} style={{ height: '40px' }}>
                            Distributor
                        </li>
                        <li className={`nav-link ${board === 'Expert' ? 'active' : ''}`} onClick={() => handleItemClick('Expert')} style={{ height: '40px' }}>
                            Expert
                        </li>
                        <li className={`nav-link ${board === 'products' ? 'active' : ''}`} onClick={() => handleItemClick('products')} style={{ height: '40px' }}>
                            All Products
                        </li>
                        {/* <li className={`nav-link ${board === 'SalesReport' ? 'active' : ''}`} onClick={() => handleItemClick('SalesReport')} style={{ height: '40px' }}>Sales Report</li> */}
                        <li className={`nav-link ${board === 'logout' ? 'active' : ''}`} onClick={handleLogout} style={{ height: '40px' }}>LogOut</li>
                    </ul>
                </div>
            )}

            {/* Main Content */}
            <div className="main-content">
                {/* Content Area */}
                {adminInfo && ( // Render the content area only if adminInfo is present
                    <>
                        {board === 'Distributor' && <Distributor />}
                        {board === 'Expert' && <Expert />}
                        {board === 'products' && <Product/>}
                        {board === 'SalesReport' && <SalesReport />}
                    </>
                )}
            </div>
        </div>
    );
};

export default AdminDashBoard;
