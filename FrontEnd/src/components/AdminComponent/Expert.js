import React, { useEffect, useState } from 'react';
import ExpertService from '../../service/ExpertService';
import './AdminExpert.css';
import axios from 'axios';
const Expert = () => {
    const [searcharr, setSearcharr] = useState([]);
    const [expertReq, setExpertReq] = useState([]);
    const [expertarr, setExpertarr] = useState([]);
  

    useEffect(() => {
        fetchExpertData();
    }, []);
    useEffect(() => {
        const filteredExperts = searcharr.filter((expert) => expert.status == 0);
        setExpertReq(filteredExperts)
    }, [searcharr]);

    const fetchExpertData = () => {
        ExpertService.getExperts()
            .then((response) => {
                const expertar = response.data;
                const filteredExpertArr = expertar.filter((e) => e.status > 0);
                setSearcharr([...expertar]);
                setExpertarr([...filteredExpertArr])

            })
            .catch();
    };

    const reqaccepthandler = async (event, expert) => {
        event.preventDefault();
        
        try {
           console.log("before axios  "+expert.expid)
            await axios.put(`http://localhost:8282/make/expert/${expert.expid}`);
            console.log("after axios  "+expert.expid)
            fetchExpertData();
        } catch (err) {
            console.error('Error resolving request', err);
        }
    };
    const reqrejecthandler = async (event, expert) => {
     
        event.preventDefault();
        try {

            await axios.delete(`http://localhost:8282/remove/expert/${expert.expid}`);

            fetchExpertData();
        } catch (err) {
            console.error('Error resolving request', err);
        }
    };

    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-12">
                    <h2>New Expert Requests</h2>
                    <div className="card-container">
                        {expertReq.map((expert) => (
                            <div className="card" key={expert.id}>
                                <h5 className="card-title mb-3">Name : {expert.expname}</h5>
                                <p> SKills : {expert.skills} </p>
                                <p> Certification : {expert.certification} </p>
                                <p>Experience : {expert.experience} years</p>
                                <div className="btn-group">
                                    <button className="btn btn-success" onClick={(event) => reqaccepthandler(event, expert)}>Accept</button>
                                    <button className="btn btn-danger" onClick={(event) => reqrejecthandler(event, expert)}>Reject</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="row" style={{marginTop:'35px'}}>
                <div className="col-12">
                    <h2>Expert At Gaming Gears</h2>
                    <div className="card-container">
                        {expertarr.map((expert) => (
                            <div className="card" key={expert.id}>
                                <h5 className="card-title mb-3">Name : {expert.expname}</h5>
                                <p> Request Resolved : {expert.sells} units</p>
                                <p> Commission Earned: {expert.commission} units</p>
                                <p>Experience : {expert.experience} years</p>
                                <div className="btn-group">
                                <button className="btn btn-danger" onClick={(event) => reqrejecthandler(event, expert)}>Remove Expert</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expert;
