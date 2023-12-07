import React, { useState, useEffect } from 'react';
import './Cart.css';
import CustomerService from '../../service/CustomerService';
import { useUser } from '../UserContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cart(props) {
  const [searcharr, setSearcharr] = useState([]);
  const [total, setTotal] = useState(0);
  const { custid } = useUser();
  const navigate = useNavigate();
  const productIds = searcharr.map(cartItem => cartItem.proId.proid);

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    // Calculate the total price whenever searcharr changes
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      for (const cartItem of searcharr) {
        totalPrice += cartItem.qty * cartItem.price;
      }
      setTotal(totalPrice);
    };

    calculateTotalPrice();
  }, [searcharr]);

  const fetchdata = () => {
    CustomerService.getCart(custid)
      .then((response) => {
        setSearcharr([...response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async function handleDelete(event, cartItem) {
    event.preventDefault();
    try {
      // Send a request to your API to delete the item from the cart
      await axios.delete(`http://localhost:8282/cart/${cartItem.cartid}`);
      // Refresh the cart data
      fetchdata();
    } catch (err) {
      console.error('Error deleting item from cart', err);
    }
  }
  async function handlePut(event, cartItem) {
    event.preventDefault();
    //window.alert(cartItem.proId.proid)
    CustomerService.addToCart(cartItem.custId.custId, cartItem.proId.proid);
    fetchdata();

  }


  const handleBuyNow = async () => {
    // window.alert("in cart buy")
    // try {
    //   const dataToSend = {
    //     "custId": custid,    
    //     "productIds": productIds,
    //     "totalprice": total
    //   };
    //   const response = await axios.post('http://localhost:8282/products/purchase/cart', dataToSend);
    //   //  window.alert("afetr axios")
    //   console.log('Buy Now response:', response.data);
    //   navigate('/');
    // } catch (error) {
    //   // window.alert("got exception")
    //   console.error('Error while processing the Buy Now request:', error);
    // }
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundImage: 'linear-gradient(35deg, #e0e0e0, white)' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-12">
                    <h5 className="mb-3">
                      <Link to="/" className="text-body">
                        <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
                      </Link>
                    </h5>
                    <hr />
                    {searcharr.map((cart, index) => (
                      <div className="card mb-3" key={index}>
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                              <div>
                                <Link
                                  to={`/products/${cart.proId.proid}`}
                                  className="text-reset"
                                  style={{ textDecoration: 'none' }}
                                >
                                  <img
                                    src={cart.proId.url1}
                                    className="img-fluid rounded-3"
                                    alt="Shopping item"
                                    style={{ width: '65px' }}
                                  />
                                </Link>
                              </div>
                              <div className="ms-3">
                                <Link to={`/products/${cart.proId.proid}`}
                                  className="text-reset"
                                  style={{ textDecoration: 'none' }}
                                >
                                  <h5>{cart.proId.proname}</h5>
                                </Link>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                              <a href="/" onClick={(event) => handleDelete(event, cart)} style={{ color: 'red' }}>
                                <i class="fas fa-minus"></i>
                              </a>
                              <input id="form1" name="quantity" value={cart.qty} type="text" class="form-control form-control-sm" style={{ width: "50px", boxShadow: 'none', textAlign: "center" }} readOnly={true} />
                              <a href="/" onClick={(event) => handlePut(event, cart)} style={{ color: 'green' }}>
                                <i class="fas fa-plus"></i>
                              </a>
                              <div style={{ width: '180px' }}>
                                <h5 className="mb-0">&#8377; {cart.qty * cart.price}</h5>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {searcharr.length > 0 ? (
                      <>
                        <h5>Total Amount &#8377; {total}</h5>
                        <button type="button" class="btn btn-primary btn-lg btn-block">
                          <Link to={`/buy/product/cart/deliveryaddr/${custid}`} className="text-reset" style={{ textDecoration: 'none' }} >
                            Buy Now
                          </Link>
                        </button>
                      </>

                    ) : (
                      <p> Your cart is empty!</p>
                    )
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
