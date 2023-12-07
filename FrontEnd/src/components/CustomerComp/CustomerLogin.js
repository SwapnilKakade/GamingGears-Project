import React, { useState } from 'react';
import SignIn from './SignIn';

const CustomerLogin = () => {

  return (

    <div className="container mt-5" style={{ height: '450px' }}>
      <div className="row" >

        <div className="col-md-7 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'linear-gradient(35deg, lightblue, white)', height: '450px', color: 'darkgray' }}>
          {/* <img src={logo} className="w-100" alt="logo" style={{ height: 70, objectFit: 'contain' }} /> */}
          <div>
            <h1 style={{ fontSize: '5rem', fontFamily: '' }}>GamingGears.</h1>
            <h1 style={{ fontSize: '1.5rem', width: '100%' }}>Follow Your Gaming Passion</h1>
          </div>
        </div>


        <div className="col-md-5 d-flex justify-content-center align-items-center " style={{ background: '#f8f9fa', height: '450px' }}>
          <SignIn></SignIn>


        </div>
      </div>
    </div>

  );
};

export default CustomerLogin;
