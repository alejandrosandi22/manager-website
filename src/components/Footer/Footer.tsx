import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <div className='lists-wrapper'>
        <ul>
          <li><strong>Manages</strong></li>
          <li>Goals</li>
          <li>Finance</li>
          <li>Gym</li>
          <li>Projects</li>
        </ul>
        <ul>
          <li><strong>Services</strong></li>
          <li>Calendar</li>
          <li>Meetings</li>
          <li>Tasks</li>
        </ul>
        <ul>
          <li><strong>Support</strong></li>
          <li>Email</li>
        </ul>
      </div>
      <div className='join-now-wrapper'>
        <button className='join-now'><a href='https://app.manager-app.ml' target='_blank' >Join Now</a></button>
        <img src="https://cdn-icons-png.flaticon.com/512/6142/6142064.png" alt="started" />
      </div>
      <h5 className='rights'>© Alejandro Sandí 2022</h5>
    </div>
  )
}

export default Footer;