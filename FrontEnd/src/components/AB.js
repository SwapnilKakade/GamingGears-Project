import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';

function AB() {
  const [requests, setRequests] = useState([]);
  const { custid } = useUser();

  useEffect(() => {
    axios.get(`http://localhost:8282/get-expert-req/${custid}`)
      .then((response) => {
        const reqArr = response.data.filter((e) => e.status === 0);
        setRequests([...reqArr]);
      })
      .catch((error) => {
        console.error('Error fetching requests:', error);
      });
  }, [custid]);

  return (
    <div className="container">
      <h2>List of Requests</h2>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <ul className="list-group">
          {requests.map((request) => (
            <li key={request.queId} className="list-group-item">
              <h5>{request.queId}</h5>
              <p>{request.que}</p>
              <small>Requested by: {request.custid.fname}</small>
              <button className="btn btn-primary">Accept</button>
              <button className="btn btn-danger">Reject</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AB;
