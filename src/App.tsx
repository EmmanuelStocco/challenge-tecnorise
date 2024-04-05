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

  async function searchForTermOnAPI(searchTerm: string) { 
    const query = `
    query {
      search(query: "${searchTerm}", type: REPOSITORY, first: 10) {
        edges {
          node {
            ... on Repository {
              id
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

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${process.env.REACT_APP_GIT_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query})
    }); 
    const { data } = await res.json();
    // console.log('restpo', res)
    console.log('Data:', data.search.edges); 
  }


  async function getRepositoryDetailsById(repoName: string, repoUser: string) { 
     const query = `{
      repository(name: "${repoName}", owner: "${repoUser}") {
        name
        description
        owner {
          login
        }
        createdAt
        updatedAt
        stargazerCount
        watchers {
          totalCount
        }
        forks {
          totalCount
        }
        languages(first: 5) {
          nodes {
            name
          }
        }
        issues {
          totalCount
        }
        pullRequests {
          totalCount
        }
        defaultBranchRef {
          target {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
        }
      }
    }
  `;
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `bearer ${process.env.REACT_APP_GIT_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query})
      });

      const data = await res.json();
      console.log('Data:', data); 
  }
  

  const handleSearch = (searchTerm: string) => { 
    // searchForTermOnAPI(searchTerm)  
    // getRepositoryDetailsById('react', 'facebook')
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
