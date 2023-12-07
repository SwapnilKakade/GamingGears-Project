import React, { useState, useEffect } from "react";

import { Link, useParams } from 'react-router-dom';
const SearchResults = (props) => {
    const { input } = useParams(); // Called param to extract input given by user from url

    console.log("value entered " + input);
    const [results, setResults] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8282/products")
            .then((response) => response.json())
            .then((json) => {
                const filteredResults = json.filter((product) => {
                    return (
                        input &&
                        product &&
                        product.proname &&
                        product.proname.toLowerCase().includes(input)
                    );
                });
                setResults(filteredResults);
                console.log("value entered " + input); // Use 'value' directly here
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [input]);
  if( results.length === 0){
      return(<p>Not Found....</p>)
  }
    return (
        <div className="container pt-5">
          
            <div className="row">
                {/* ProductCards */}
               
                {results.map((product) => (
                    <div key={product.id} className="col-lg-3 col-md- col-sm-12 mb-4 d-flex ">
                        <div className="card flex-fill border-0 card-hover" style={{ background: '#f8f9fa' }}>
                            <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light " data-mdb-ripple-color="light">
                                <Link to={`/products/${product.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                    <img src={product.url1} className="w-100" alt={product.proname} style={{ height: 150, objectFit: 'contain' }} />
                                </Link>

                                <pre></pre>
                            </div>
                            <Link to={`/products/${product.proid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                <div className="card-body">
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                                        <h5 className="card-title mb-3">{product.proname}</h5>
                                    </a>
                                    <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>

                                    </a>
                                    <h6 className="mb-3">&#8377; {product.price}</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}

export default SearchResults;
