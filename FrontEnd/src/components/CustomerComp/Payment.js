// import React, { useEffect, useState } from 'react';
// import './Payment.css'; // Import your CSS file
// import { useUser } from '../UserContext';
// // import { useAddress } from '../AdressContext';
// import CustomerService from '../../service/CustomerService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Payment = () => {
//   const [searcharr, setSearcharr] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [totalItem, setTotalItem] = useState(0);
//   const { custid } = useUser();
//   // const { address } = useAddress();
//   const [paymentMode, setPaymentMode] = useState("COD");
//   const navigate = useNavigate();
//   const [paymentData, setPaymentData] = useState({
//     cardNumber: '',
//     cardHolderName: '',
//     expirationDate: '',
//     cvv: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentData({
//       ...paymentData,
//       [name]: value,
//     });
//   };

//   const fetchdata = () => {
//     CustomerService.getCart(custid)
//       .then((response) => {
//         setSearcharr([...response.data]);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handlePaymentModeChange = (e) => {
//     setPaymentMode(e.target.value);
//   };

//   // useEffect(() => {
//   //   fetchdata();
//   //   const calculateTotalPrice = () => {
//   //     let totalPrice = 0;
//   //     let totalItemincart = 0;
//   //     for (const cartItem of searcharr) {
//   //       totalPrice += cartItem.qty * cartItem.price;
//   //       totalItemincart += cartItem.qty;
//   //     }
//   //     setTotal(totalPrice);
//   //     setTotalItem(totalItemincart);
//   //   };

//   //   calculateTotalPrice();
//   // }, [searcharr]);

//   const handlePaymentSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       window.alert(custid + " " + " " + address + " " + paymentMode);
//       const response = await axios.post("http://localhost:8282/products/purchase/cart",
//         {
//           "custid": custid,
//           "address": address,
//           "paymentmode": paymentMode,
//         });
 
//       if (response.status === 200) {
       
//         navigate('/order/history');
//         toast.success("Payment Successful", {
//           position: toast.POSITION.TOP_CENTER,
//           autoClose: 3000,
//         });
//       } else {
//         toast.error("Payment Failed error", {
//           position: toast.POSITION.TOP_RIGHT,
//           autoClose: 3000,
//         });
//       }
//     } catch (err) {
//       toast.error("Payment Failed", {
//         position: toast.POSITION.TOP_RIGHT,
//         autoClose: 3000,
//       });
//     }
//   };

//   return (
//     <div className="payment-container">
//       <div className="purchase-summary">
//         <h2 className="summary-title">Purchase Summary</h2>
//         {/* <p>Total Items: {totalItem}</p>
//         <p>Total Amount: {total}</p> */}
//       </div>

//       <div className="payment-details">
//         <label>Select Payment</label><br></br>
//         <select
//           style={{
//             width: '40%',
//             padding: '10px',
//             fontSize: '16px',
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             backgroundColor: '#fff',
//             color: '#333',
//             outline: 'none',
//             textAlign: 'center',
//           }}
//           onChange={handlePaymentModeChange}
//         >
//           <option value="COD">COD</option>
//           <option value="Online">PayNow</option>
//         </select>

//         {paymentMode === "Online" && (
//           <form className="payment-form" onSubmit={handlePaymentSubmit}>
//             <h2 className="payment-title">Payment Details</h2>
//             <div className="form-group">
//               <label htmlFor="cardNumber">Card Number</label>
//               <input
//                 type="text"
//                 id="cardNumber"
//                 name="cardNumber"
//                 placeholder="1234 5678 9012 3456"
//                 value={paymentData.cardNumber}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="cardHolderName">Cardholder's Name</label>
//               <input
//                 type="text"
//                 id="cardHolderName"
//                 name="cardHolderName"
//                 placeholder="John Doe"
//                 value={paymentData.cardHolderName}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>
//             <div className="form-row">
//               <div className="form-group">
//                 <label htmlFor="expirationDate">Expiration Date</label>
//                 <input
//                   type="text"
//                   id="expirationDate"
//                   name="expirationDate"
//                   placeholder="MM/YYYY"
//                   value={paymentData.expirationDate}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="cvv">CVV</label>
//                 <input
//                   type="text"
//                   id="cvv"
//                   name="cvv"
//                   placeholder="123"
//                   value={paymentData.cvv}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </div>
//             <button className="payment-button" type="submit">
//               Pay Now
//             </button>
//           </form>
//         )}

//         {paymentMode === "COD" && (
//           <button className="payment-button" type="submit" onClick={handlePaymentSubmit}>
//             Pay Later
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Payment;
