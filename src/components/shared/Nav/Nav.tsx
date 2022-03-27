import React, { useContext, useEffect, useRef, useState } from 'react';
import './Nav.scss';
import { ThemeContext } from '../../../App';
import { useLocalStorage } from '../../../services/localStorage';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Nav(props: any) {
  
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const location = useLocation();
  
  const [ isActive, setIsActive ] = useState<boolean>(false);
  const themeToggle = useRef<any>(<input/>);
  const pageOffset = useRef<number>(0);
  const [ scroll, setScroll ] = useState<boolean>(false);
  const [ checked, setChecked ] = useLocalStorage('cheked', false);

  useEffect(() => {
    if (checked) themeToggle.current.checked = true;
    else themeToggle.current.checked = false;


    window.addEventListener('scroll', () => {
      setIsActive(false);
      if (window.pageYOffset > pageOffset.current) {
        pageOffset.current = window.pageYOffset;
        setScroll(true);
      } else {
        pageOffset.current = window.pageYOffset;
        setScroll(false);
      }
    })
  }, [])
  
  const handleNavToggle = () => {
    if (isActive) setIsActive(false);
    else setIsActive(true);
  }

  const scrollTo = (e: any) => {
    if (location.pathname === '/about') return navigate('/');
    if (e.target.id === 'home') window.scrollTo({top: 0, behavior: 'smooth'});
    if (e.target.id === 'manages') props.manages.current.scrollIntoView({behavior: 'smooth'});
    if (e.target.id === 'services') props.services.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className={`nav ${scroll ? 'scroll' : ''}`}>
      <h1 className='logo'>Manager</h1>
      <div className='toggle-wrapper'>
        <div onClick={handleNavToggle} className={`toggle ${isActive ? 'active' : ''}`}></div>
      </div>
      <ul className={`list ${isActive ? '' : 'hide'}`}>
        <li onClick={(e: any) => {
          scrollTo(e);
          handleNavToggle();
        }}><Link id='home' className='li' to='/'>Home</Link></li>
        <li className='li' id='manages' onClick={(e: any) => {
          scrollTo(e);
          handleNavToggle()}}>Manages</li>
        <li className='li' id='services' onClick={(e: any) => {
          scrollTo(e);
          handleNavToggle()}}>Services</li>
        <li onClick={handleNavToggle}><Link className='li' to='/about'>About</Link></li>
        <li className='li-toggle'>
          <input
          ref={themeToggle}
          onChange={(e: any) => {
            setChecked(e.target.checked);
            theme();
          }}
          className={`checkbox ${!themeToggle.current.checked ? 'light-mode' : 'dark-mode'}`}
          type="checkbox"
          name="checkbox"
          id="checkbox" />
        </li>
      </ul>
    </div>
  );
}

export default Nav;