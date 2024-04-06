import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToggleButton } from './styles/styles';
import { lightTheme, darkTheme } from './styles/theme'; 
import HomePage from './pages'; 
import store from './store';


function App() { 
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme)); 
  };   
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>  
      <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>  
       <HomePage />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
