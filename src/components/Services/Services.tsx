import React, { useEffect, useState } from 'react';
import './Services.scss';
import calendar from '../../assets/undraw_online_calendar_re_wk3t.svg';
import meetings from '../../assets/undraw_meeting_re_i53h.svg';
import task from '../../assets/undraw_to_do_list_re_9nt7.svg';

export default function Services(props: any) {

  const [ translate, setTranslate ] = useState<any>({});
  let [ slide, setSlide ] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      if (slide === 0) {
        setTranslate({transform: 'translateX(-80vw)'});
        setSlide(slide = 1);
      }
      else if (slide === 1) {
        setTranslate({transform: 'translateX(-160vw)'});
        setSlide(slide = 2);
      }
      else if (slide === 2) {
        setTranslate({transform: 'translateX(0vw)'});
        setSlide(slide = 0);
      }
    }, 5000)
  }, [])

  const handleSlider = (e: any) => {
    if (e.target.id === '0') {
      setSlide(slide = 0);
      setTranslate({transform: 'translateX(0vw)'});
    }
    if (e.target.id === '1') {
      setSlide(slide = 1);
      setTranslate({transform: 'translateX(-80vw)'});
    }
    if (e.target.id === '2') {
      setSlide(slide = 2);
      setTranslate({transform: 'translateX(-160vw)'});
    }
  }

  return (
    <div ref={props.services} id='services' className='services'>
      <div className='services-wrapper'>
        <div className='service calendar' style={translate}>
          <img src={calendar} alt="calendar" />
          <h4>Calendar to organize important dates</h4>
        </div>
        <div className='service meetings' style={translate}>
          <img src={meetings} alt="calendar" />
          <h4>Arrive on time for your meetings</h4>
        </div>
        <div className='service tasks' style={translate}>
          <img src={task} alt="calendar" />
          <h4>Write down tasks to complete them on time</h4>
        </div>
        <div className='span-wrapper'>
          <span id="0" onClick={handleSlider} className={`span ${slide === 0 ? 'active' : ''}`}></span>
          <span id="1" onClick={handleSlider} className={`span ${slide === 1 ? 'active' : ''}`}></span>
          <span id="2" onClick={handleSlider} className={`span ${slide === 2 ? 'active' : ''}`}></span>
        </div>
      </div>
    </div>
  )
}