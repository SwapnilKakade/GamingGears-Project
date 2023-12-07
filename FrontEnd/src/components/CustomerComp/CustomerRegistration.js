import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomerRegistration = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mob_number: '',
    email: '',
    pass: '',
    pass2: '',
    user_status: '0',
    isExpert: '0',
    address: ''
  });

  const validateName = (name) => {
    return name.trim().length >= 3;
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const validateMobileNumber = (mobileNumber) => {
    return mobileNumber.trim().length === 10;
  };

  const validatePassword = (password) => {
    return password.trim().length >= 8 && password === formData.pass2;
  };

  const validateAllFields = () => {
    return (
      validateName(formData.fname) &&
      validateName(formData.lname) &&
      validateMobileNumber(formData.mob_number) &&
      validateEmail(formData.email) &&
      validatePassword(formData.pass) &&
      formData.address.trim() !== ''
    );
  };

  const save = async (event) => {
    event.preventDefault();

    try {
      if (!validateAllFields()) {
        setErrorMessage('Please fill out all fields correctly');
        return;
      }

      const response = await axios.post("http://localhost:8282/addcustomer", {
        "fname": formData.fname,
        "lname": formData.lname,
        "mob_number": formData.mob_number,
        "email": formData.email,
        "pass": formData.pass,
        "user_status": formData.user_status,
        "isExpert": formData.isExpert,
        "address": formData.address,
      });

      if (response.status === 200) {
        navigate('/customerlogin');

        toast.success("Registration successful", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      } else {
        setErrorMessage('Invalid email or password');
        console.log('Registration failed');
      }

    } catch (err) {
      console.error('User Registration Failed:', err);
      alert("User Registration Failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    save(e);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
     
        <div className="card card-hover" style={{ border: 'none', height: 'auto', background: '#f8f9fa' }}>
          <div className="card-header" style={{ border: 'none', height: '70px', background: '#f8f9fa', fontSize: '2em' }}>Registration Form</div>
          {errorMessage && (
              <div className="alert alert-danger mt-3">{errorMessage}</div>
            )}
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fname">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mob_number">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="mob_number"
                  name="mob_number"
                  value={formData.mob_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="pass"
                  name="pass"
                  value={formData.pass}
                  onChange={handleChange}
                  placeholder='password should contain at least 8 characters'
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass2">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="pass2"
                  name="pass2"
                  value={formData.pass2}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    height: '80px',
                    resize: 'none'
                  }}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-primary" style={{ width: '170px', fontSize: '18px' }}>
                Register
              </button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegistration;
