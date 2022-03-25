import React from 'react';
import './Header.scss';
import undraw from '../../assets/undraw_organizing_projects_re_9p1k.svg';

export default function Header() {
  return (
    <div className='header'>
      <div className='text-wrapper'>
        <h2>Organize</h2>
        <p>your life</p>
      </div>
      <div className='image-wrapper'>
        <img draggable='false' src={undraw} alt="undraw" />
      </div>
    </div>
  )
}
