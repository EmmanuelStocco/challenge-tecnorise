import React from 'react';   
import { 
  TableContainer,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableHead,
  TableHeadCell,
  TableHeadRow
} from './style';
  
interface TableProps {
    repositories: any[]
}

export function RepositoryTable  ({ repositories }: TableProps) {
  console.log('repositories', repositories)
  return (
    <TableContainer>
      <TableHead>
        <TableHeadRow>
          <TableHeadCell>Nome do Repositório</TableHeadCell>
          <TableHeadCell>Descrição</TableHeadCell>
          <TableHeadCell>Proprietário</TableHeadCell>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {repositories.map((repo) => (
          <TableBodyRow key={repo.node.id}>
            <TableBodyCell>{repo.node.name}</TableBodyCell>
            <TableBodyCell>{repo.node.description}</TableBodyCell>
            <TableBodyCell>{repo.node.owner.login}</TableBodyCell>
          </TableBodyRow>
        ))}
      </TableBody>
  </TableContainer>
  );
};
