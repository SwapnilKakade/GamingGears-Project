import React, { useEffect, useState } from 'react';
import './DeliveryAddress.css'; // Import your CSS file
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests
import { toast } from 'react-toastify'; // Import toast for notifications
import './Payment.css'
import { useUser } from '../UserContext';
import ProductService from '../../service/ProductService';
const BuyNow = () => {


  // code to complete
  const { proid } = useParams();
  const { custid } = useUser();
  const [deliveryaddress, setDeliveryAddress] = useState()
  const navigate = useNavigate();
  const [paymentMode, setPaymentMode] = useState('COD');
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    pincode: '',
    locality: '',
    street: '',
    city: '',
    state: '',
  });


  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: '',
  });

  const [currentStep, setCurrentStep] = useState('address');


  useEffect(() => {
    if (custid > 0) {
      ProductService.getProductById(proid)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

    } else {
      navigate("/customerlogin")
    }
  }, [proid]);

  const handleInputChangeAddr = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };
  const handleDeliveryClick = () => {

    const address = `${formData.name}, ${formData.mobileNumber}, ${formData.locality} ${formData.city} ${formData.state} ${formData.pincode}`;
    setDeliveryAddress(address);
    setCurrentStep('payment'); // Change the step to 'payment'
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    try {
      window.alert("product price " + product.price + " " + paymentMode)

      console.log("payment begin")
      const response = await axios.post('http://localhost:8282/buy/now', {
        "custid": custid,
        "proid": proid,
        "price": product.price,
        "address": deliveryaddress,
        "paymentmode": paymentMode,

      });
      console.log("payment complete")
      if (response.status === 200) {
        navigate('/order/history');
        toast.success('Payment Successful', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      } else {
        toast.error('Payment Failed error', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    } catch (err) {
      console.log("payment failed")
      toast.error('Payment Failed', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="delivery-container" style={{ justifyContent: 'center', height: '100%', width: '100%' }}>
      {currentStep === 'address' && (
        <form className="address-form" onSubmit={handleDeliveryClick}>
          <div className="input-row">
            <input type="text" name="name" className="input-field" placeholder="Name" value={formData.name} onChange={handleInputChangeAddr} required />
            <input type="text" name="mobileNumber" className="input-field" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleInputChangeAddr} required />
          </div>
          <input type="text" name="pincode" className="input-field" placeholder="Pincode" value={formData.pincode} onChange={handleInputChangeAddr} required />
          <input type="text" name="locality" className="input-field" placeholder="Locality" value={formData.locality} onChange={handleInputChangeAddr} required />
          <input type="text" name="street" className="input-field" placeholder="Area/Street" value={formData.street} onChange={handleInputChangeAddr} required />
          <input type="text" name="city" className="input-field" placeholder="City" value={formData.city} onChange={handleInputChangeAddr} required />
          <input type="text" name="state" className="input-field" placeholder="State" value={formData.state} onChange={handleInputChangeAddr} required />
          <button type="submit" className="deliver-button">Deliver Here</button>
        </form>

      )}

      {currentStep === 'payment' && (
        <div className="payment-container" style={{ alignContent: 'center' }}>

          <div className="payment-details">
            <label>Select Payment</label><br></br>
            <select
              style={{ width: '40%', padding: '10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#fff', color: '#333', outline: 'none', textAlign: 'center', }}
              onChange={(e) => setPaymentMode(e.target.value)}
              value={paymentMode}
            >
              <option value="COD">COD</option>
              <option value="Online">PayNow</option>
            </select>

            {currentStep === 'payment' && (
              <form className="payment-form" onSubmit={handlePaymentSubmit} >

                {paymentMode === "Online" && (
                  <div>
                    <h2 className="payment-title">Payment Details</h2>
                    <div className="form-group">
                      <label htmlFor="cardNumber">Card Number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={paymentData.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cardHolderName">Cardholder's Name</label>
                      <input
                        type="text"
                        id="cardHolderName"
                        name="cardHolderName"
                        placeholder="John Doe"
                        value={paymentData.cardHolderName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="expirationDate">Expiration Date</label>
                        <input
                          type="text"
                          id="expirationDate"
                          name="expirationDate"
                          placeholder="MM/YYYY"
                          value={paymentData.expirationDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          value={paymentData.cvv}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <button className="payment-button" type="submit">
                      Pay Now
                    </button>
                  </div>
                )}

                {paymentMode === 'COD' && (
                  <button className="payment-button" onClick={handlePaymentSubmit}>
                    Pay Later
                  </button>
                )}


              </form>
            )}


          </div>
        </div>
      )}
    </div>
  );
};

export default BuyNow;
