import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import './NavMenu.css';
import logo1 from '../../images/logo1.png';
import SearchBar from '../SearchBarComponents/SearchBar';
import SearchResultsList from '../SearchBarComponents/SearchResultsList';
import { useUser } from '../UserContext';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDistributor } from '../DistributorComponent/DistributorContext';
function NavMenu() {
  const [collapsed, setCollapsed] = useState(true);
  const [results, setResults] = useState([]);
  const { custid, setCustid } = useUser();
  const {disid}=useDistributor()
  const [custidNumber, setCustidNumber] = useState(1);
  const navigate = useNavigate();
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };


  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  React.useEffect(() => {

    const storedCustid = sessionStorage.getItem('customerid');
    if (storedCustid !== null) {
      const custidNumber = parseInt(storedCustid, 10); // Convert back to a number
      setCustid(custidNumber);

      console.log('Customer ID:', custidNumber);
    } else {
      console.log('Customer ID not found in sessionStorage.');
    }

    // const custidnew=custid;
    // localStorage.setItem('customerId', custidnew);
    // const custidnew1 = localStorage.getItem('customerId');

    // console.log("customer id stored in session "+custidnew1)
    // if (storedCustid !== null) {
    //   const cstidNum = parseInt(storedCustid, 10);
    //   // setCustidNumber(cstidNum);
    //   console.log('Customer ID:', cstidNum);
    //   setCustid(storedCustid);
    // } else {
    //   console.log('Customer ID not found in localStorage.');
    // }
  }, []);
  var num = 1;
  React.useEffect(() => {
    // This code will run once when the component mounts
    // if(custidNumber==1){
    //   setCustidNumber(5)
    //   window.location.reload();
    // }
    //window.alert("logged in")

  }, []);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // The user clicked "OK" (yes) in the confirmation dialog
      sessionStorage.removeItem('customerid');
      setCustid(0);
      navigate("/")
    }
  };



  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 nvbar" container light style={{height:'4.5rem',fontSize:'1.1rem'}} >
        <NavbarBrand tag={Link} to="/"> <img src={logo1} height="40" alt="GamingGears Logo" /></NavbarBrand>

        <SearchBar setResults={setResults}></SearchBar>

        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
          <ul className="navbar-nav flex-grow">
            <NavItem>
              {custid > 0 ? (

                <div className="dropdown" style={{ boxShadow: 'none' }}>
                  <span className="btn dropdown-toggle" onMouseOver={toggleDropdown} style={{ outline: 'none', cursor: 'pointer', boxShadow: 'none',fontSize:'1.1rem' }}>
                    My Account
                  </span>
                  {dropdownOpen && (
                    <ul className="dropdown-menu" style={{ display: 'block',fontSize:'1.1rem' }} onMouseLeave={() => setDropdownOpen(false)}>
                      {/* <li>
                        <NavLink tag={Link} ><i className="fa fa-user" style={{color:'#3498db'}}></i>   My Profile</NavLink>
                      </li> */}
                      <li>
                        <NavLink tag={Link} to="/order/history"><i className="fa fa-shopping-bag" style={{color:'#3498db'}}></i>  My Orders</NavLink>
                      </li>
                      <li>
                        <NavLink tag={Link} onClick={handleLogout}><i className="fa fa-sign-out" style={{color:'#3498db'}}></i>  Logout</NavLink>
                      </li>
                    </ul>
                  )}
                </div>

              ) : (
                <li>
                  <NavLink tag={Link} className="text-dark" to="/customerlogin">Login</NavLink>
                </li>


              )}
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/expert">Expert</NavLink>
            </NavItem>
            <NavItem> 
              {disid>0?(
                <NavLink tag={Link} className="text-dark" to="/distributor-home"> Seller</NavLink>
              ):
              (
                <NavLink tag={Link} className="text-dark" to="/distributor-login">Become Seller</NavLink>
              )
              }
             
            </NavItem>
            <NavItem>

              {custid > 0 ? (
                <li>
                  <NavLink tag={Link} className="text-dark" to="/cart" ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg></NavLink>
                </li>
              ) : (
                <li>

                  <NavLink tag={Link} className="text-dark" to="/customerlogin"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg></NavLink>
                </li>
              )}





            </NavItem>

          </ul>
        </Collapse>
      </Navbar>
     
    </header>
  );
}

export default NavMenu;