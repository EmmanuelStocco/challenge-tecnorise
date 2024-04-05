import React, { useState } from 'react'; 
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { SearchBar } from './components/SearchBar';


function App() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme)); 
  };

  const handleSearch = (searchTerm: string) => {
    console.log('Search term:', searchTerm);
    // Adicione aqui a lógica para buscar os repositórios com base no searchTerm
  };

  return (
    <ThemeProvider theme={theme}> 
        <header className="App-header"> 
        <SearchBar onSearch={handleSearch} />

        <button onClick={toggleTheme}>Toggle Theme</button> 
        </header> 
    </ThemeProvider>
  );
}

export default App;
