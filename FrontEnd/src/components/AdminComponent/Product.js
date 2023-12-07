import { useEffect, useState } from "react";

import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductService from "../../service/ProductService";
function Product() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchData();

    }, []);
    const fetchData = () => {
        ProductService.getAllProduct()
            .then((response) => {
                setProducts([...response.data]);

            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }

    async function removerequest(proid) {

        try {

            const response = await axios.delete(`http://localhost:8282/delete/product/${proid}`);
            fetchData();
            if (response.status === 200) {
                toast.success("Product Deleted", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            }
        } catch (err) {
            console.error('Error deleting request', err);
        }
    }
    return (
        <div className="col-md">
            <div className="dashboard-header">
                <h1 className="display-4">Products Available At GamingGears</h1>
            </div>
            <ul className="list-group">
                {products.map((product) => (
                    <li
                        key={product.proid}
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
                                {product.proname}
                            </h3>
                            <p>{product.description}</p>
                            <h5>Distributor : {product.disid.disname}</h5>

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
                                Price: ₹ {product.price}
                            </p>

                        </div>
                        <div>
                            <button className="btn btn-danger" style={{
                                fontSize: '0.9rem',
                                marginLeft: '2rem',
                                fontWeight: 'bold',
                                marginBottom: '0',
                            }}
                                onClick={(event) => removerequest(product.proid)}
                            >Remove</button>
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}
export default Product;