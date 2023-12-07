import React, { Component } from 'react';
import HomeProducts from './HomeProducts';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeCategory from './HomeCategory';
import logo from '../../images/logo1.png'
import CarouselComponent from './CarouselComponent';
import Footer from '../LayoutComponent/Footer';
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        {/* corosole */}
        <CarouselComponent></CarouselComponent>

        {/* <!-- category --> */}
        <HomeCategory></HomeCategory>
        {/* <!-- category --> */}

        {/* Products */}
        <HomeProducts></HomeProducts>
        {/* Products */}
        <Footer></Footer>
      </div>
    );
  }
}
