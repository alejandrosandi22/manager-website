import React, { useEffect } from 'react';
import './Manages.scss';
import goals from '../../assets/undraw_goals_re_lu76.svg';
import finance from '../../assets/undraw_finance_re_gnv2.svg';
import gym from '../../assets/undraw_healthy_habit_bh-5-w.svg';
import projects from '../../assets/undraw_project_completed_re_pqqq.svg';

function Manages() {
  return (
    <div className='manages'>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='projects section'>
       <img className='img' src={goals} alt='projects' />
        <div className='text-wrapper'>
          <h3 className='title'>Goals</h3>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aliquam, officiis, nihil exercitationem necessitatibus dignissimos eos aperiam quasi est dolor delectus. Repellendus, consequatur aliquam? Quo corporis voluptas ex eos eius.</p>
      </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='finance section'>
        <div className='text-wrapper'>
          <h3 className='title'>Finance</h3>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aliquam, officiis, nihil exercitationem necessitatibus dignissimos eos aperiam quasi est dolor delectus. Repellendus, consequatur aliquam? Quo corporis voluptas ex eos eius.</p>
        </div>
       <img className='img' src={finance} alt='finance' />
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='gym section'>
       <img className='img' src={gym} alt='gym' />
        <div className='text-wrapper'>
          <h3 className='title'>GYM</h3>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aliquam, officiis, nihil exercitationem necessitatibus dignissimos eos aperiam quasi est dolor delectus. Repellendus, consequatur aliquam? Quo corporis voluptas ex eos eius.</p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='projects section'>
        <div className='text-wrapper'>
          <h3 className='title'>Projects</h3>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores aliquam, officiis, nihil exercitationem necessitatibus dignissimos eos aperiam quasi est dolor delectus. Repellendus, consequatur aliquam? Quo corporis voluptas ex eos eius.</p>
        </div>
       <img className='img' src={projects} alt='projects' />
      </div>
    </div>
  )
}

export default Manages;