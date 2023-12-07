import React, { useState, useEffect } from 'react';
import axios from 'axios';
import expertlogo from '../../images/expert.png';
import ExpertService from '../../service/ExpertService';
import { useUser } from '../UserContext';
import Assembly from './Assembly';

const ExpertHome = (props) => {
    const { custid } = useUser();
    const [expert, setExpert] = useState(null);
    const [requests, setRequests] = useState([]);
    const [resolve, setResolve] = useState('');
    const [resolvingRequest, setResolvingRequest] = useState(null);

    useEffect(() => {
        // Fetch expert data
        ExpertService.getExpertById(custid)
            .then((response) => {
                setExpert(response.data);
            })
            .catch((error) => {
                console.error('Error fetching expert data:', error);
            });
        fetchdata();
    }, [custid]);

    const fetchdata = () => {
        // Fetch expert requests with status 0
        axios.get(`http://localhost:8282/get-expert-req/${custid}`)
            .then((response) => {
                const reqArr = response.data.filter((e) => e.status === 0);
                setRequests([...reqArr]);
            })
            .catch((error) => {
                console.error('Error fetching requests:', error);
            });
    };

    if (!expert || !expert.status) {
        return <p>Loading...</p>;
    }

    const handleRemoveRequest = async (event, request) => {
        event.preventDefault();
        try {
            await axios.delete(`http://localhost:8282/expert/request/rmv/${request.queId}`);
            fetchdata();
        } catch (err) {
            console.error('Error deleting request', err);
        }
    };

    const handleResolveInputChange = (event) => {
        setResolve(event.target.value);
    };

    const handleResolveRequest = async (event, request) => {
        event.preventDefault();
        try {
      console.log(request.queId+"       "+resolve)
         await axios.post(`http://localhost:8282/expert/request/resolve`, {
              "queId":request.queId,
              "resolution": resolve, 
            });
            console.log(request.queId+"       "+resolve+" solved")
            setResolvingRequest(null); 
            setResolve(''); 
            fetchdata();
        } catch (err) {
            console.error('Error resolving request', err);
        }
    };

    return (
        <div className="container">
            <div className="container mt-5" style={{ backgroundColor: '#f0f0f0', height: '280px', position: 'relative' }}>
                <div className="row">
                    <div className="col-md-6">
                        <img src={expertlogo} className="d-block" style={{ height: '250px', paddingTop: '20px' }} alt="Slide 1" />
                    </div>
                    <div className="col-md-6">
                        <div className="expert-details">
                            <br></br>
                            <h2>Expert Name : {expert.expname}</h2>
                            <pre></pre>
                            <h5>Experience : {expert.experience} yrs</h5>
                            <pre></pre>
                            <h5>Skills : {expert.skills} </h5>
                            <pre></pre>
                            <h5>Commission : &#8377; {expert.sells*5} </h5>
                            <pre></pre>
                            <h5>Request Solved: {expert.sells}</h5>
                            <pre></pre>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="container">
                        <h2>List of Requests</h2>
                        {requests.length === 0 ? (
                            <p>No requests found.</p>
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
                                            <div>
                                                <p>{request.que}</p>
                                                <small>Requested by: {request.custid.fname}</small>
                                            </div>
                                            <div>
                                                {!resolvingRequest || resolvingRequest !== request.queId ? (
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{ marginRight: '30px', height: '20%' }}
                                                        onClick={() => setResolvingRequest(request.queId)}
                                                    >
                                                        Resolve
                                                    </button>
                                                ) : (
                                                    <div>
                                                        <input
                                                            type='text'
                                                            style={{
                                                                padding: '10px',
                                                                border: '1px solid #ccc',
                                                                borderRadius: '5px',
                                                            }}
                                                            placeholder='Enter Your Answer'
                                                            value={resolve}
                                                            onChange={handleResolveInputChange}
                                                        />
                                                        <button
                                                            className="btn btn-primary"
                                                            style={{ marginRight: '10px', height: '20%',marginLeft:'10px' }}
                                                            onClick={(event) => handleResolveRequest(event, request)}
                                                        >
                                                            Submit
                                                        </button>
                                                        <button
                                                            className="btn btn-secondary"
                                                            style={{ height: '20%' }}
                                                            onClick={() => setResolvingRequest(null)}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                )}

                                                {!resolvingRequest || resolvingRequest !== request.queId ? (
                                                    <button
                                                        className="btn btn-danger"
                                                        style={{ marginRight: '30px', height: '20%' }}
                                                        onClick={(event) => handleRemoveRequest(event, request)}
                                                    >
                                                        Remove
                                                    </button>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <pre></pre>
            {/* <Assembly expid={custid}></Assembly> */}
        </div>
    );
};

export default ExpertHome;
