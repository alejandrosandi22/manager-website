import React, { useRef } from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';
import Nav from '../../components/shared/Nav/Nav';
import Manages from '../../components/Manages/Manages';
import Services from '../../components/Services/Services';
import Footer from '../../components/Footer/Footer';

export default function Home() {

  const manages = useRef<any>();
  const services = useRef<any>();

  return (
    <div className='Home'>
      <Nav manages={manages} services={services} />
      <Header />
      <div className='subtext'>
        <h2>Take charge of your life</h2>
        <p data-aos="fade-right">Manages your life in differents areas to be more organized and have clear goals</p>
      </div>
      <Manages manages={manages} />
      <Services services={services} />
      <Footer />
    </div>
  )
}
