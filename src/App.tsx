import React, { useEffect } from 'react';
import './App.scss';
import Home from './views/Home/Home';
import About from './views/About/About';
import Error from './views/Error/Error';
import { useLocalStorage } from './services/localStorage';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export const ThemeContext = React.createContext<any>(null);

function App() {
  const [ theme, setTheme ] = useLocalStorage('theme', false);

  const changeTheme = () => {
    if (theme) setTheme(false);
    else setTheme(true);
  }

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={changeTheme}>
        <div className={`App ${!theme ? 'ligth' : 'dark'}`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='**' element={<Error />}/>
          </Routes>
        </div>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
