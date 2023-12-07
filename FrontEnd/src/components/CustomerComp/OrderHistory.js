import { useState, useEffect } from 'react';
import React from 'react';
import { useUser } from '../UserContext';
import CustomerService from '../../service/CustomerService';
import './OrderHistory.css';

function OrderHistory() {
  const { custid } = useUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    console.log('product id ' + custid);
    CustomerService.getOrders(custid)
      .then((response) => {
        setOrders([...response.data]);
      })
      .catch((error) => {
        alert('Error in purchase');
      });
  }, [custid]);

  if (!orders.length > 0) {
    return (
      <div className="empty-orders">
        <h2>You haven't purchased anything yet</h2>
        <p>Explore our products and start shopping!</p>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="order-history-container" style={{ maxWidth: '86%', margin: '0 auto', background: 'none', padding: '20px',border:'none',boxShadow:'none' }}>
      <h1 className="order-history-title">Order History</h1>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <p className="order-date">Order Date: <br />{formatDate(order.odate)}</p>
            <p className="order-date">Address: <br />{order.address}</p>
            {order.status === 0 ? (
              <>
                <p className="order-date">Delivery Status:<br />Order Placed</p>
                <p className="order-date">Expected Delivery Date:<br />{formatDate(new Date(order.odate).setDate(new Date(order.odate).getDate() + 6))}</p>
              </>
            ) : order.status === 1 ? (
              <>
                <p className="order-date">Delivery Status:<br />Out for Delivery</p>
                <p className="order-date">Expected Delivery Date:<br />{formatDate(new Date(order.odate).setDate(new Date(order.odate).getDate() + 6))}</p>
              </>
            ) : (
              <>
              <p className="order-total">Delivery Status:<br />Deliverd</p>
              <p className="order-total">Delivery Status:<br />Order Delivered on {formatDate(order.odate)}</p>
              </>
            )}
            <p className="order-date" style={{fontWeight:'bolder'}}>
              OrderItem : {order.proid.proname}<br></br>
              Total: &#8377; {order.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderHistory;
