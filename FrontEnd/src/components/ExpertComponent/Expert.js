import React, { useEffect, useState } from 'react';
import ExpertService from '../../service/ExpertService';
import { Link } from 'react-router-dom';
import expertimg from '../../images/expert.png';
import '../HomeComponent/HomeProduct.css';
import { useUser } from '../UserContext';
const Expert = () => {
  const { custid } = useUser();
  const [hasMatch, setHasMatch] = useState(false);
  const [searcharr, setSearcharr] = useState([]);
  useEffect(() => {
    fetchExpertData();
  }, []);

  useEffect(() => {
    // Filter the experts and update hasMatch here
    const filteredExperts = searcharr.filter((expert) => expert.expid == custid && expert.status > 0);
    setHasMatch(filteredExperts.length > 0);

    // Log the updated value of hasMatch
    console.log("Updated hasMatch:", hasMatch);
  }, [custid, searcharr]);
   
  const fetchExpertData = () => {
    ExpertService.getExperts()
      .then((response) => {
        const expertarr = response.data;
        // Filter the expertarr based on their status only active expert can be visible condition
        const filteredExpertArr = expertarr.filter((e) => e.status > 0 );
  
        setSearcharr([...filteredExpertArr]);
       
      })
      .catch();
  };

  const getExpertById = (expid) => {
    ExpertService.getExpertById(expid)
      .then(() => {
        fetchExpertData();
      })
      .catch();
  };



  return (
    <div className="container pt-5">
      <div className="container">

        {/* here we are using multiple conditional rendering to user user is not logged in he will redirect to login page  */}
        {
          hasMatch ? (

            <button type="button" className="btn btn-primary">
              <Link to={`/my-experts/${custid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                You Are an Expert
              </Link>
            </button>
          ) : (
            <button type="button" className="btn btn-primary">
              {
                custid > 0 ? (<Link to={`/add-expert/${custid}`} className="text-reset" style={{ textDecoration: 'none' }}>

                  Become an Expert
                </Link>) : (<Link to={`/customerlogin`} className="text-reset" style={{ textDecoration: 'none' }}>

                  Become an Expert
                </Link>)
              }

            </button>
          )
        }
      </div>
      <div className="row" >
        {searcharr.map((expert) => (
          <div key={expert.expid} className="col-lg-3 col-md- col-sm-12 mb-4 d-flex">
            {console.log(expert.expid)}
            <div className="card flex-fill border-0 card-hover" style={{ background: '#f8f9fa' }}>
              <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                <Link to={`/experts/${expert.expid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                  <img src={expertimg} className="w-100" alt={expert.experience} style={{ height: 150, objectFit: 'contain' }} />
                  <a href="#!" onClick={() => getExpertById(expert.expid)}>
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100"></div>
                    </div>
                    <div className="hover-overlay">
                      <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </div>
                  </a>
                </Link>
              </div>
              <Link to={`/experts/${expert.expid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                <div className="card-body">
                  <a href="#" className="text-reset" style={{ textDecoration: 'none',marginBottom:'20px' }}>
                    <h5 className="card-title mb-3">Name : {expert.expname}</h5>
                  </a>
                
                  <a href="#" className="text-reset" style={{ textDecoration: 'none' }}>
                    <p>Experience : {expert.experience} years</p>
                  </a>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expert;
