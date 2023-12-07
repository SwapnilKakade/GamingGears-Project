import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeProduct.css'; // Make sure your CSS file is correctly linked here
import ProductService from '../../service/ProductService';

function HomeProducts() {
    const [searcharr, setSearcharr] = useState([]);

    useEffect(() => {
        fetchdata();
    }, []);

    const fetchdata = () => {
        ProductService.getproducts()
            .then((response) => {
                setSearcharr(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <div className="container pt-5">
            <div className="row">
                {searcharr.map((product) => (
                    <div key={product.id} className="col-lg-3 col-md-4 col-sm-11 mb-4 d-flex">
                        <div className="card flex-fill border-0 card-hover" style={{ background: '#f8f9fa' }}>
                            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                                <Link to={`/products/${product.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                    <img src={product.url1} className="w-100" alt={product.proname} style={{ height: 150, objectFit: 'contain' }} />
                                </Link>
                            </div>
                            <Link to={`/products/${product.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                <div className="card-body">
                                    <h5 className="card-title mb-3">{product.proname}</h5>
                                    <h6 className="mb-3">&#8377; {product.price}</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeProducts;
