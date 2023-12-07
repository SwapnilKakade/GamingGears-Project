import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'
const footerStyle = {
  backgroundColor: '#f8f9fa',
  textAlign: 'center',
  padding: '2px 0', // Add padding to give some space
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',



};

function Footer() {
  return (
    // <div style={containerStyle}>


    //  <div className="container my-5" style={{ flex: 1 }}>

    //  </div>
    <footer className='Footer' >

      {/* <div className="container d-flex justify-content-center py-5">
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
            <i className="fab fa-facebook-f"></i>
          </button>
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
            <i className="fab fa-youtube"></i>
          </button>
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
            <i className="fab fa-instagram"></i>
          </button>
          <button type="button" className="btn btn-primary btn-lg btn-floating mx-2" style={{ backgroundColor: '#54456b' }}>
            <i className="fab fa-twitter"></i>
          </button>
        </div> */}
  

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'black', textDecoration: 'none' }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-reset" href="https://mdbootstrap.com/" style={{ color: 'black', textDecoration: 'none' }}>GamingGears</a>
      </div>
    </footer>
    //  </div>
  );
}

export default Footer;
