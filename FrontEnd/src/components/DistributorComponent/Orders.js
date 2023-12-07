import { useEffect, useState } from "react";
import { useDistributor } from "./DistributorContext";
import DistributorService from "../../service/DistributorService";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Orders() {
    const { disid } = useDistributor();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        DistributorService.getOrders(disid)
            .then((response) => {
                setOrders([...response.data]);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }

    async function removerequest(orderid) {
        try {
            const response = await axios.delete(`http://localhost:8282/delete/order/${orderid}`);
            fetchData();
            if (response.status === 200) {
                toast.success("Order Deleted", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            }
        } catch (err) {
            console.error('Error deleting order', err);
        }
    }

    return (
        <div className="col-md">
            <div className="dashboard-header">
                <h1 className="display-4">Your Orders</h1>
            </div>
            <ul className="list-group">
                {orders.map((order) => (
                    <li
                        key={order.orderid}
                        className="list-group-item"
                        style={{
                            marginBottom: '20px',
                            padding: '20px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            textAlign: 'left',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                            borderRadius: '5px',
                            height: 'fit-content'
                        }}
                    >
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                                Product Name: {order.proid.proname}
                            </h3>
                            <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                                Customer Name: {order.custid.fname} {order.custid.lname}
                            </h3>
                            <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
                                Delivery Address : {order.address}
                            </h3>
                            <p style={{ fontSize: '0.9rem' }}>
                                Order Date: {order.odate}
                            </p>
                        </div>
                        <div style={{ flex: 1, textAlign: 'right' }}>
                            <p
                                style={{
                                    fontSize: '0.9rem',
                                    color: '#0074cf',
                                    fontWeight: 'bold',
                                    marginBottom: '0',
                                }}
                            >
                                Amount : ₹{order.proid.price}
                            </p>
                        </div>
                        <div>
                            {/* <button
                                className="btn btn-danger"
                                style={{
                                    fontSize: '0.9rem',
                                    marginLeft: '2rem',
                                    fontWeight: 'bold',
                                    marginBottom: '0',
                                }}
                                onClick={() => removerequest(order.orderid)}
                            >
                                Remove
                            </button> */}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Orders;
