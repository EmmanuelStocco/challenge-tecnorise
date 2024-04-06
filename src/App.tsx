import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'; 
import { lightTheme, darkTheme } from './styles/theme'; 
import HomePage from './pages'; 
import store from './store';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


function App() { 
  const [theme, setTheme] = useState(darkTheme);
  const [darkThemeCurrent, setDarkThemeCurrent] = useState<boolean>(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme)); 
    setDarkThemeCurrent(!darkThemeCurrent)
  };   
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>  
      {/* <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>   */}
      <DarkModeSwitch
      style={{  position: 'absolute', right: '2rem' }}
      checked={darkThemeCurrent}
      onChange={toggleTheme}
      size={100}
    />
       <HomePage />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
