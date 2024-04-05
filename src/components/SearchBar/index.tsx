import React from 'react';
import { Container, Input } from './style';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <Container>
      <Input type="text" placeholder="Search..." onChange={handleSearch} />
    </Container>
  );
};
