
import ProductService from '../service/ProductService';
import { Link, useParams } from 'react-router-dom'; // Import useParams hook
import { useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import CustomerService from '../service/CustomerService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BuyNow from './CustomerComp/BuyNow'

const ProductDetails = (props) => {
    const { pid } = useParams(); // Access the 'pid' property for url
    const [product, setProduct] = React.useState(null);
    const { custid } = useUser();
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        ProductService.getProductById(pid)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [pid]);

    if (!product) {
        return <p>Loading...</p>;
    }
    const handleAddToCart = async (event) => {
        event.preventDefault();
        console.log("customer id " + custid);
        if (custid > 0) {
            try {
                const response = await CustomerService.addToCart(custid, product.proid);
                if (response.status === 200) {
                    navigate("/cart");
                    toast.success(product.proname + ", Added to Cart !", {
                        position: toast.POSITION.TOP_RIGHT, // You can change the position
                        autoClose: 900, // You can control how long the toast is displayed (in milliseconds)
                    });

                } else {
                    setErrorMessage('Failed to add product');
                    toast.error("Failed to Add", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    });
                }
            } catch (error) {
                console.error('Error adding product to cart', error);
            }
        } else {
            window.alert("Please login !!!");
            navigate("/customerlogin");
        }
    };

    return (
        <div className="container mt-5" style={{ background: '#f8f9fa' }}>
            <div className="row" >
                <div className="col-md-6">
                    {errorMessage && (
                        <div className="alert alert-danger mt-3">{errorMessage}</div>
                    )}
                    <pre></pre>
                    <pre></pre>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="2000">
                                <img src={product.url1} className="d-block" style={{ width: '600px', height: '450px' }} alt="Slide 1" />

                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={product.url2} className="d-block" style={{ width: '600px', height: '450px' }} alt="Slide 1" />

                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={product.url3} className="d-block" style={{ width: '600px', height: '450px' }} alt="Slide 1" />

                            </div>
                            {/* Add more carousel items here */}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6" >
                    <div className="product-details" style={{ width: '100%', height: '100%', outline: 'none' }} >
                        <pre></pre>
                        <pre></pre>

                        <h2>{product.proname}</h2>
                        <pre></pre>
                        <pre></pre>
                        <pre></pre>
                        <p>{product.description}</p>
                        <pre></pre>
                        <pre></pre>
                        <pre></pre>
                        <h4>&#8377; {product.price}</h4>
                        <pre></pre>

                        <button className="btn btn-primary" onClick={handleAddToCart} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg> Add to Cart</button>
                        <span style={{ margin: '0 10px' }}></span>
                        {
                            custid > 0 ? (
                                <Link to={`/buy/now/${product.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                    <button className="btn btn-primary">Buy Now</button>
                                </Link>
                            ) : (
                                <Link to={`/customerlogin`} className="text-reset" style={{ textDecoration: 'none' }}>
                                    <button className="btn btn-primary">Buy Now</button>
                                </Link>
                            )
                        }

                    </div>

                </div>
            </div>
            <pre></pre>
            <pre></pre>
            <pre></pre>
            <pre></pre>

        </div>
    );
}

export default ProductDetails;
