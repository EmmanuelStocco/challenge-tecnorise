import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; 
import { ButtonSearch, Container, Input } from './style';

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
      <FiSearch style={{ color: '#FFFFFFF8' }} />
      <Input 
        type="text"
        placeholder="Pesquise por repositórios..." 
        onChange={handleRepoName}
        onKeyDown={handleKeyDown}  
      />
      <ButtonSearch onClick={runHandleSearchOn}>
        <h1> Buscar </h1>
      </ButtonSearch>
    </Container>
  );
};
