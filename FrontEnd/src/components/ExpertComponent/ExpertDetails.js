import React, { useEffect } from 'react'; // Import useEffect
import { Link, useParams } from 'react-router-dom';
import expertlogo from '../../images/expert.png';
import ExpertService from '../../service/ExpertService';
import Assembly from './Assembly';
import { useUser } from '../UserContext';
import axios from 'axios';
import { useState } from 'react';

const ExpertDetails = () => {
    const { expid } = useParams();
    const [expert, setExpert] = React.useState(null);
    const { custid } = useUser();
    const [requests, setRequests] = useState([]);

    const fetchdata = () => {
        axios.get(`http://localhost:8282/get-expert-req/${expid}`)
            .then((response) => {
                const reqArr = response.data.filter((e) => e.custid.custId === custid); // Corrected the comparison operator
                setRequests([...reqArr]);
            })
            .catch((error) => {
                console.error('Error fetching requests:', error);
            });
    };

    useEffect(() => {
        ExpertService.getExpertById(expid)
            .then((response) => {
                setExpert(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

        fetchdata();
    }, [expid, custid]);

    if (!expert || !expert.status) {
        return <p>Loading...</p>;
    }

    const isExpertBelongsToCustomer = custid === expert.expid;
    const handleRemoveRequest = async (event, request) => {
        event.preventDefault();
        try {
            await axios.delete(`http://localhost:8282/customer/request/rmv/${request.queId}`);
            fetchdata();
        } catch (err) {
            console.error('Error deleting request', err);
        }
    };
    return (
        <div className="container">
            <div className="container mt-5" style={{ backgroundColor: '#f0f0f0', height: '280px' }}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={expertlogo} className="d-block" style={{ height: '250px', paddingTop: '20px' }} alt="Slide 1" />
                    </div>
                    <div className="col-md-6">
                        <div className="expert-details">
                            <br />
                            <h2>Expert Name: {expert.expname}</h2>
                            <pre />
                            <h5>Experience: {expert.experience} yrs</h5>
                            <pre />
                            <h5>Skills: {expert.skills} </h5>
                            <pre />
                            <h5>Request Solved: {expert.sells}</h5>
                            <pre />

                            {isExpertBelongsToCustomer ? (
                                <div >

                                </div>
                            ) : (
                                custid > 0 ? (
                                    <Link to={`/make-req/${expert.expid}`} className="text-reset" style={{ textDecoration: 'none' }}>
                                        <button className="btn btn-primary">Request</button>
                                    </Link>
                                ) : (
                                    <Link to="/customerlogin" className="text-reset" style={{ textDecoration: 'none' }}>
                                        <button className="btn btn-primary">Request</button>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
                <pre />
            </div>
            <pre />
            {/* <Assembly expid={expert.expid} /> */}

            <div className="row">
                <div className="col-md-12">
                    <div className="container">
                        <h2>Your Requests to {expert.expname}</h2>
                        {requests.length === 0 ? (
                            <p> you didnt make any request</p>
                        ) : (
                            <div className="row">
                                {requests.map((request) => (
                                    <div
                                        className="col-md-12"
                                        key={request.queId}
                                        style={{
                                            border: '1px solid #ccc',
                                            borderRadius: '5px',
                                            padding: '10px',
                                            marginBottom: '10px',
                                            height: '20%',
                                        }}
                                    >
                                        <div className="list-group-item d-flex justify-content-between align-items-center">

                                            {
                                                request.resolution === "yet to resolved" ? (
                                                    <>
                                                        <div>
                                                            <p>{request.que}</p>
                                                        </div>
                                                        <div>
                                                            <p>{request.resolution}</p>
                                                        </div>
                                                        <div>
                                                            <button
                                                                className="btn btn-danger"
                                                                style={{ marginRight: '30px', height: '20%' }}
                                                                onClick={(event) => handleRemoveRequest(event, request)}
                                                            >
                                                                Delete Request
                                                            </button>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div style={{ textAlign:"left", fontSize: '1.1rem' }}>
                                                            <p >{request.que}</p><br></br>
                                                            <p style={{ color: 'blue', marginRight: '100px' }}>Response By {expert.expname} : {request.resolution}</p>
                                                        </div>
                                                    </>
                                                )
                                            }


                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ExpertDetails;
