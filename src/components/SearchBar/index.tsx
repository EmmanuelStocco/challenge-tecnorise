import React from 'react';
import { Container, Input } from './style';
import { FiSearch } from 'react-icons/fi'; 

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <Container>
      <FiSearch /> 
      <Input type="text" placeholder="Pesquise por repositórios..." onChange={handleSearch} />
    </Container>
  );
};
