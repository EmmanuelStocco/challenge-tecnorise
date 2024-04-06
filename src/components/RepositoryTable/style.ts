import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 60%;
  border-collapse: separate;
  border-spacing: 0 1px;  
  margin-top: 2rem;
  background-color: ${(props) => props.theme.colors.container};
  border-radius: 15px;
`;

export const TableHead = styled.thead`
  background-color: ${(props) => props.theme.colors.dark};
  border-radius: 15px;
`;

export const TableHeadRow = styled.tr`  
`;

export const TableHeadCell = styled.th`
  padding: 8px;
  text-align: center;
  font-size: 1.5rem;
  border-bottom: 0.5px solid ${(props) => props.theme.colors.text};
  border-right: 0.5px solid ${(props) => props.theme.colors.text};  
  border-radius: 15px;

 `;

export const TableBody = styled.tbody` 
  border-radius: 15px;

`;

export const TableBodyRow = styled.tr`
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  };
  border-radius: 15px;

`;

export const TableBodyCell = styled.td`
  padding: 8px;
  font-size: 1.2rem;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  border-right: 1px solid ${(props) => props.theme.colors.text};
`;
