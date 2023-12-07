import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DistributorRegistration = () => {
  const [formData, setFormData] = useState({
    disname: '',
    address: '',
    licence: '',
    storename: '',
    mobile: '',
    email: '',
    pass: '',
    pass2: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

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
      validateName(formData.disname) &&
      validateName(formData.storename) &&
      validateName(formData.licence) &&
      validateMobileNumber(formData.mobile) &&
      validateEmail(formData.email) &&
      validatePassword(formData.pass) &&
      formData.pass === formData.pass2 && 
      formData.address.trim() !== ''
    );
  };

  async function save(event) {
    event.preventDefault();
    try {
      if (!validateAllFields()) {
        setErrorMessage('Please fill out all fields correctly');
        return;
      }

      const response = await axios.post("http://localhost:8282/register-distributor", {
        "disname": formData.disname,
        "address": formData.address,
        "licence": formData.licence,
        "storename": formData.storename,
        "mobile": formData.mobile,
        "email": formData.email,
        "pass": formData.pass
      });

      if (response.status === 200) {
        navigate('/distributor-login');
        toast.success("Registration successful, Your Request Will Approved very soon.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      } else {
        setErrorMessage('Invalid email or password');
        console.log('Registration failed');
      }

    } catch (err) {
      console.error('Registration Failed:', err);
      toast.error("Registration failed", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  }

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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card card-hover" style={{ border: 'none', height: 'auto', background: '#f8f9fa' }}>
            <div className="card-header" style={{ border: 'none', height: '70px', background: '#f8f9fa', fontSize: '2em' }}>Registration Form</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="disname">Enter Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="disname"
                    name="disname"
                    value={formData.disname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="storename">Enter Store Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="storename"
                    name="storename"
                    value={formData.storename}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="licence">Licence</label>
                  <input
                    type="text"
                    className="form-control"
                    id="licence"
                    name="licence"
                    value={formData.licence}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Enter Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Enter Email</label>
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
                  <label htmlFor="pass2">ReEnter Password</label>
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
              {errorMessage && (
                <div className="alert alert-danger mt-3">{errorMessage}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributorRegistration;
