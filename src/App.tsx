import React, { useState } from 'react'; 
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';


function App() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme)); 
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header"> 
        <button onClick={toggleTheme}>Toggle Theme</button>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p> 
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
