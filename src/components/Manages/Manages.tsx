import React from 'react';
import './Manages.scss';
import goals from '../../assets/undraw_goals_re_lu76.svg';
import finance from '../../assets/undraw_finance_re_gnv2.svg';
import gym from '../../assets/undraw_healthy_habit_bh-5-w.svg';
import projects from '../../assets/undraw_project_completed_re_pqqq.svg';

export default function Manages(props: any) {
  console.log(props)
  return (
    <div ref={props.manages} id="manages" className='manages'>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='projects section'>
       <img className='img' src={goals} alt='projects' />
        <div className='text-wrapper'>
          <h3 className='title'>Goals</h3>
          <p className='text'>Write your goals in progress completed one to one. Clear your mind an focus in one thing at once and make reality your dreams.</p>
      </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='finance section'>
        <div className='text-wrapper'>
          <h3 className='title'>Finance</h3>
          <p className='text'>Organize your finances to have more control in yours incomes and expenses, Create a budget and pay your fixed expenses at time.</p>
        </div>
       <img className='img' src={finance} alt='finance' />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='gym section'>
       <img className='img' src={gym} alt='gym' />
        <div className='text-wrapper'>
          <h3 className='title'>GYM</h3>
          <p className='text'>Exercise, sleep and eat healthy food is very important to be health. Write your schedule to go to the gym and the exercises that you going to do each day.</p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='projects section'>
        <div className='text-wrapper'>
          <h3 className='title'>Projects</h3>
          <p className='text'>Create differents projects to increase your skills in your profesional area ant write them to control the progress</p>
        </div>
       <img className='img' src={projects} alt='projects' />
      </div>
    </div>
  );
}
