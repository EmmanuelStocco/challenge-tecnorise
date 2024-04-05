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
  // const query = `{
  //   repository(name: "github-cms", owner: "sharu725") {
  //     owner {
  //       login
  //     }
  //   }
  // }`;

  const query = `
  query {
    search(query: "react", type: REPOSITORY, first: 10) {
      edges {
        node {
          ... on Repository {
            name
            description
            owner {
              login
            }
          }
        }
      }
    }
  }
`;

  async function load() {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer Bearer`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query})
    }); 
    const data = await res.json();
    console.log('restpo', res)
    console.log('Data:', data);
    // console.log('Data:', data.data.repository.owner.login);

  }

  const handleSearch = (searchTerm: string) => {
    console.log('Search term2:', searchTerm); 
    load()
  };
  return (
    <ThemeProvider theme={theme}>  
       <HomePage>
        <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton> 
        <TextIntro title='Pesquise o repositório'/>
        <SearchBar handleSearch={handleSearch} />   
       </HomePage>
    </ThemeProvider>
  );
}

export default App;
