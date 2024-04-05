import React, { useState } from 'react';
import { Container, Input } from './style';
import { FiSearch } from 'react-icons/fi'; 

interface SearchBarProps {
  handleSearch: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [repoName, setRepoName] = useState<string>("")
  const handleSearchOn = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <Container>
      <FiSearch /> 
      <Input type="text" placeholder="Pesquise por repositórios..." onChange={handleSearchOn} />
    </Container>
  );
};
