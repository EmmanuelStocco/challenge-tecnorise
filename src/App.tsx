import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components'; 
import { lightTheme, darkTheme } from './styles/theme'; 
import HomePage from './page'; 
import store from './store'; 
import Footer from './components/Footer';


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
       <HomePage 
        darkThemeCurrent={darkThemeCurrent} 
        toggleTheme={toggleTheme}
       />
       <Footer />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
