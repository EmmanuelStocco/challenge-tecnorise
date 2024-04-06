import styled from 'styled-components';



export const TableContainer = styled.table`
  width: 60%;
  border-collapse: collapse; 
  margin-top: 2rem;
  background-color: ${(props) => props.theme.colors.container};
`;

export const TableHead = styled.thead`
  background-color: ${(props) => props.theme.colors.container};
`;

export const TableHeadRow = styled.tr``;

export const TableHeadCell = styled.th`
  padding: 8px;
  text-align: left;
`;

export const TableBody = styled.tbody``;

export const TableBodyRow = styled.tr`
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const TableBodyCell = styled.td`
  padding: 8px;
`;