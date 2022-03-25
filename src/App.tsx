import React, { useEffect } from 'react';
import './App.scss';
import Page from "./page/Page";
import { useLocalStorage } from './services/localStorage';
import 'aos/dist/aos.css';
import Aos from 'aos';


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
    <ThemeContext.Provider value={changeTheme}>
      <div className={`App ${!theme ? 'ligth' : 'dark'}`}>
        <Page />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
