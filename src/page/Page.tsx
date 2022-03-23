import React from 'react';
import './Page.scss';
import Header from '../components/Header/Header';
import Nav from '../components/shared/Nav/Nav';
import Services from '../components/Services/Services';

export default function Page() {
  return (
    <div className='Page'>
      <Nav />
      <Header />
      <Services />
    </div>
  )
}
