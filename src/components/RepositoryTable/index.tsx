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
import { useDispatch } from 'react-redux';
import { loadSingleRepositoryRequest } from '../../store/ducks/singleRepositoryDetails/actions';
 
interface TableProps {
    repositories: any[]
}

export function RepositoryTable  ({ repositories }: TableProps) {
  const dispatch = useDispatch();
  const handleRowClick = (repoName: string, repoUser: string) => { 
    dispatch(loadSingleRepositoryRequest(repoName, repoUser));
  }; 
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
          <TableBodyRow 
            key={repo.node.id}
            onClick={() => handleRowClick(repo.node.name, repo.node.owner.login)}
            >
            <TableBodyCell>{repo.node.name}</TableBodyCell>
              <TableBodyCell>{repo.node.description}</TableBodyCell>
              <TableBodyCell>{repo.node.owner.login}</TableBodyCell>
            </TableBodyRow>
          ))}
      </TableBody>
  </TableContainer>
  );
};
