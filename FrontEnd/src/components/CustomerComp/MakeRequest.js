import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';
import { useParams } from 'react-router-dom';

function MakeRequest() {
  const [request, setRequest] = useState('');
  const [response, setResponse] = useState('');
  const { custid } = useUser();
  const { expid } = useParams();
  const handleChange = (e) => {
    setRequest(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to the backend
    axios.post('http://localhost:8282/make-req-exp', {
        "custid": custid,
        "expid": expid,
        "que": request
      })
      .then((response) => {
        if (response.status === 200) {
          setResponse(response.data);
         
        } else {
          window.alert('Request submission failed');
        }
      })
      .catch((error) => {
        console.error('Error submitting request:', error);
      });
  };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop:'9rem' }}>
  <h2>Make a Request</h2>

  <div className="form-group" style={{ width: '700px',marginTop:'2rem' }}>
    <label htmlFor="requestInput" style={{paddingBottom:'10px'}}>Request:</label>
    <input
      type="text"
      id="requestInput"
      className="form-control"
      placeholder="Enter your request"
      value={request}
      onChange={handleChange}
    />
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit} style={{marginTop:'3em'}}>Submit</button>

  {response && (
    <div>
      <h3></h3>
      <p>Request Sent to Expert !!!</p>
    </div>
  )
}
</div>

  );
}

export default MakeRequest;
