import React, { useContext, useEffect, useRef, useState } from 'react';
import './Nav.scss';
import { ThemeContext } from '../../../App';
import { useLocalStorage } from '../../../services/localStorage';

function Nav() {

  const theme = useContext(ThemeContext);
  
  const themeToggle = useRef<any>(<input/>);
  const pageOffset = useRef<number>(0);
  const [ scroll, setScroll ] = useState<boolean>(false);
  const [ checked, setChecked ] = useLocalStorage('cheked', false);

  useEffect(() => {
    if (checked) themeToggle.current.checked = true;
    else themeToggle.current.checked = false;


    window.addEventListener('scroll', () => {
      if (window.pageYOffset > pageOffset.current) {
        pageOffset.current = window.pageYOffset;
        setScroll(true);
      } else {
        pageOffset.current = window.pageYOffset;
        setScroll(false);
      }
    })
  }, [])

  return (
    <div className={`nav ${scroll ? 'scroll' : ''}`}>
      <h1 className='logo'>Manager</h1>
      <ul className='list'>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
        <li>
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
  )
}

export default Nav;