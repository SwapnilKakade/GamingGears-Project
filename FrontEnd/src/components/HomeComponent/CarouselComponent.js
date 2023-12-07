import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import cor22 from '../../images/cor22.jpg';
import cor23 from '../../images/cor23.jpg';
import cor4 from '../../images/cor4.jpg';

const CarouselComponent = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={cor4} className="d-block w-100" alt="Slide 1" style={{height:'450px'}}/>
        </div>
        <div className="carousel-item">
          <img src={cor23} className="d-block w-100" alt="Slide 2" style={{height:'450px'}}/>
        </div>
        <div className="carousel-item">
          <img src={cor22} className="d-block w-100" alt="Slide 3" style={{height:'450px'}}/>
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
  );
};

export default CarouselComponent;
