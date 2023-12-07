import React, { useState } from 'react';
import logo from '../../images/logo1.png';
import DistriSignIn from './DistriSignIn';

const DistributorLogin = () => {

  return (

    <div className="container mt-5" style={{ height: '450px' }}>
      <div className="row" >

        <div className="col-md-7 d-flex justify-content-center align-items-center" style={{   backgroundImage: 'linear-gradient(35deg,lightyellow,lightblue)', height: '450px', color: 'rgba(51, 51, 51, 0.8)' }}>
        <div>
        <h1 style={{fontSize:'5rem',fontFamily:''}}>GamingGears.</h1>
        <h1 style={{fontSize:'1.5rem',width:'100%'}}>Start Your Business Journey with Us Today!</h1>
        </div>                        
                  </div>


        <div className="col-md-5 d-flex justify-content-center align-items-center " style={{ background: '#f8f9fa', height: '450px' }}>
         <DistriSignIn></DistriSignIn>
    
         
        </div>
      </div>
    </div>

  );
};

export default DistributorLogin;
