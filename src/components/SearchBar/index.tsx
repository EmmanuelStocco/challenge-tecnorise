import React, { useState } from 'react';
import { ButtonSearch, Container, Input } from './style';
import { FiSearch } from 'react-icons/fi'; 

interface SearchBarProps {
  handleSearch: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [repoName, setRepoName] = useState<string>("")

  const runHandleSearchOn = () => {
    handleSearch(repoName); 
  };

  const handleRepoName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepoName(e.target.value); 
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runHandleSearchOn();
    }
  };

  return (
    <Container>
      <FiSearch /> 
      <Input 
        type="text"
        placeholder="Pesquise por repositórios..." 
        onChange={handleRepoName}
        onKeyDown={handleKeyDown}  
      />
      <ButtonSearch onClick={runHandleSearchOn}></ButtonSearch>
    </Container>
  );
};
