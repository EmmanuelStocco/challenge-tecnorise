import React, { useState } from 'react';  
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme'; 
import { ToggleButton } from './styles/styles'; 
import { SearchBar } from './components/SearchBar';
import HomePage from './pages';
import TextIntro from './components/TextTitle';


function App() {
  const [theme, setTheme] = useState(darkTheme);
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
        <TextIntro title='Pesquise o repositório'/>
        <SearchBar onSearch={handleSearch} />   
       </HomePage>
    </ThemeProvider>
  );
}

export default App;
