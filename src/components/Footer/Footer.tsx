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
      </div>
      <div className='join-now-wrapper'>
        <button className='join-now'>Join Now</button>
        <img src="https://cdn-icons-png.flaticon.com/512/6142/6142064.png" alt="started" />
      </div>
      <h5 className='rights'>© Manager 2022</h5>
    </div>
  )
}

export default Footer;