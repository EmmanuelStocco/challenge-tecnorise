import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi'; 
import {
   ButtonSearch, 
   Container,
   Input,
   ButtonClear } from './style';
import { useDispatch } from 'react-redux';
import { resetRepository } from '../../store/ducks/repositories/actions';

interface SearchBarProps {
  handleSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [repoName, setRepoName] = useState<string>("")
  const dispatch = useDispatch(); 

  const runHandleSearchOn = () => {
    handleSearch(repoName); 
  };

  const runHandleClearRepositories = () => {
    setRepoName("")
    dispatch(resetRepository());
  }

  const handleRepoName = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setRepoName(e.target.value); 
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runHandleSearchOn();
    }
  };

  return (
    <>
    <Container>
      <FiSearch style={{ color: '#FFFFFFF8' }} /> 
      <Input 
        type="text"
        placeholder="Pesquise repositórios..." 
        onChange={handleRepoName}
        onKeyDown={handleKeyDown}
        value={repoName}
      />
      <ButtonSearch onClick={runHandleSearchOn}>
        <h1> Buscar </h1>
      </ButtonSearch> 
    </Container>

          
      <ButtonClear   onClick={runHandleClearRepositories}>
        <h1> Limpar busca </h1>
      </ButtonClear>
    </>
  );
};

export default SearchBar;