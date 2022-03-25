import React from 'react';
import './Page.scss';
import Header from '../components/Header/Header';
import Nav from '../components/shared/Nav/Nav';
import Manages from '../components/Manages/Manages';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

export default function Page() {
  return (
    <div className='Page'>
      <Nav />
      <Header />
      <div className='subtext'>
        <h2>Lorem ipsum dolor</h2>
        <p data-aos="fade-right">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores possimus tempora ad ipsa eveniet ea maxime culpa corrupti soluta voluptatum numquam incidunt nam voluptatibus, tenetur pariatur, ipsam iure, id atque.</p>
      </div>
      <Manages />
      <Services/>
      <Footer />
    </div>
  )
}
