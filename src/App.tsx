import React, { useState } from 'react';  
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme'; 
import { ToggleButton } from './styles/styles'; 
import { SearchBar } from './components/SearchBar';
import HomePage from './pages';
import TextIntro from './components/TextTitle'; 
import { searchForTermOnAPI } from './services';
import { Provider } from 'react-redux'
import store from './store'

function App() { 
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme)); 
  };     

  const handleSearch = (searchTerm: string) => { 
    searchForTermOnAPI(searchTerm)  
    // getRepositoryDetailsById('react', 'facebook')
  };
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>  
       <HomePage>
        <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton> 
        <TextIntro title='Pesquise o repositório'/>
        <SearchBar handleSearch={handleSearch} />   
       </HomePage>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
