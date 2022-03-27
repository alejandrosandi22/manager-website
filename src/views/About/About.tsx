import React from 'react';
import './About.scss';
import Nav from '../../components/shared/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import about from '../../assets/undraw_team_work_k-80-m.svg';

export default function About(props: any) {
  return (
    <div className='about'>
      <Nav manages={props.manages} services={props.services} />
      <div className='about-wrapper'>
        <img className='about-image' src={about} alt='about' />
        <div className='text-wrapper'>
          <h3 className='title'>What is Manager?</h3>
          <p className='text'>Is a web app where you can organize the differents activities and projects that you have in your live. Here you can Write your goals, projects, manage your finances and time to can go to the gym or orginize the exercices that you want to do each day. Also do a budget to have more control with your economy pay debts and save money.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}