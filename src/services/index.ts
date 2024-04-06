export async function searchForTermOnAPI(searchTerm: string) { 
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
    return data.search.edges;
};


export async function searchSingleRepositoryDetailsById(repoName: string, repoUser: string) { 
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
};