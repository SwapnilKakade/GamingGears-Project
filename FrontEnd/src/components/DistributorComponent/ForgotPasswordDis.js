import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPasswordDis = () => {
  const [password , setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { email } = useParams();
  const navigate = useNavigate();
console.log("user email"+email)
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your server to initiate the password reset process
      const response = await axios.post('http://localhost:8282/forgot-password', {
        "email": email,
        "pass":password
      });

      if (response.status === 200 && response.data == "ok") {
        navigate('/customerlogin');
                

                toast.success("Password changed !", {
                  position: toast.POSITION.TOP_RIGHT, 
                  autoClose: 3000, 
                });
      } else {
        setMessage('Failed to send password reset instructions.');
      }
    } catch (error) {
      console.error('Error sending password reset request:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Dis</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={email}
                readOnly
              />
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                className="form-control"
                id="pass"
                name="pass"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
          </form>
          {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordDis;
