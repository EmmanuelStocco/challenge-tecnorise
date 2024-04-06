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
  return (
    <TableContainer>
      <TableHead>
        <TableHeadRow>
          <TableHeadCell>Nome</TableHeadCell>
          <TableHeadCell>Descrição</TableHeadCell>
          <TableHeadCell>Usuário</TableHeadCell>
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
