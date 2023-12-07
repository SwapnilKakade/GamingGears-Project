import React, { useEffect, useState } from 'react';
import "./AdminDistributor.css"
import DistributorService from '../../service/DistributorService';
import axios from 'axios';
const Distributor = () => {
    const [searcharr, setSearcharr] = useState([]);
    const [distributorReq, setDistributorReq] = useState([]);
    const [distributorarr, setDistributorarr] = useState([])
    useEffect(() => {
        fetchExpertData();
    }, []);
    useEffect(() => {
        const filteredarr = searcharr.filter((dis) => dis.status === 0);
        const filteredarr2 = searcharr.filter((dis) => dis.status > 0);
        setDistributorReq([...filteredarr]);
        setDistributorarr([...filteredarr2]);
    }, [searcharr]);

    const fetchExpertData = () => {
        DistributorService.getAllDistributors()
            .then((response) => {
                const disar = response.data;
                setSearcharr([...disar]);

            })
            .catch();
    };


    const reqaccepthandler = async (event, dis) => {
        event.preventDefault();

        try {
            console.log("before axios  " + dis.disid)
            await axios.put(`http://localhost:8282/make/distributor/${dis.disid}`);
            console.log("after axios  " + dis.disid)
            fetchExpertData();
        } catch (err) {
            console.error('Error resolving request', err);
        }
    };
    const reqrejecthandler = async (event, dis) => {

        event.preventDefault();
        try {

            await axios.delete(`http://localhost:8282/remove/distributor/${dis.disid}`);

            fetchExpertData();
        } catch (err) {
            console.error('Error resolving request', err);
        }
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>New Distributors Requests</h2>
                    <div className="card-container">
                        {distributorReq.map((dis) => (
                            <div className="card" key={dis.disid}>
                                <h5 className="card-title">Name: {dis.disname}</h5>
                                <p className="card-content">Email: {dis.email}</p>
                                <p className="card-content">Mobile No: {dis.mobile}</p>
                                <p className="card-content">Store Name: {dis.storename}</p>
                                <p className="card-content">License: {dis.licence}</p>
                                <div className="btn-group">
                                    <button className="btn btn-success" onClick={(event) => reqaccepthandler(event, dis)}>Accept</button>
                                    <button className="btn btn-danger" onClick={(event) => reqrejecthandler(event, dis)}>Reject</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>Distributors At Gaming Gears</h2>
                    <div className="card-container">
                        {distributorarr.map((dis) => (
                            <div className="card" key={dis.disid}>
                                <h5 className="card-title">Distributor ID: {dis.disid}</h5>
                                <h5 className="card-title">Name: {dis.disname}</h5>
                                <p className="card-content">Email: {dis.email}</p>
                                <p className="card-content">Mobile No: {dis.mobile}</p>
                                <p className="card-content">Store Name: {dis.storename}</p>
                                <div className="btn-group">
                                    <button className="btn btn-danger" onClick={(event) => reqrejecthandler(event, dis)}>Remove Distributor</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Distributor;
