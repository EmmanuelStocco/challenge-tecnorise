import React, { useState } from 'react';  
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme'; 
import { ToggleButton } from './styles/styles'; 
import { SearchBar } from './components/SearchBar';
import HomePage from './pages';


function App() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme)); 
  }; 
  const handleSearch = (searchTerm: string) => {
    console.log('Search term2:', searchTerm); 
  };
  return (
    <ThemeProvider theme={theme}>  
       <HomePage>
        <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton> 
        <SearchBar onSearch={handleSearch} />   
       </HomePage>
    </ThemeProvider>
  );
}

export default App;
