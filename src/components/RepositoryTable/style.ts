import { lighten } from 'polished';
import styled from 'styled-components';

export const TableContainer = styled.table`
  width: 60%;
  border-collapse: separate;
  /* border-spacing: 0 1px;   */
  margin-top: 2rem;
  background-color: ${(props) => props.theme.colors.container};
  border-radius: 15px;
  padding: 8px;
  
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    width: 100%; 
  }
`;

export const TableHead = styled.thead`
  background-color: ${(props) => props.theme.colors.secondary};
  /* border-radius: 15px; */
`;

export const TableHeadRow = styled.tr` 
 @media screen and (max-width: 768px) {
    /* font-size: 3rem;  */
  }
`;

export const TableHeadCell = styled.th` 
  text-align: center;
  font-size: 1.5rem; 
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  padding: 4px 16px 4px;
  @media screen and (max-width: 768px) {
    font-size: 1rem; 
    padding: 2px 2px 2px;
  }
 `;

export const TableBody = styled.tbody`  
  background-color: ${(props) => lighten(0.05, props.theme.colors.container)};
@media screen and (max-width: 768px) {
    width: 1rem; 
  }
`;

export const TableBodyRow = styled.tr`
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }; 
  @media screen and (max-width: 768px) {
    width: 1rem; 
  }
`;

export const TableBodyCell = styled.td`
  font-size: 1.2rem;
  text-align: start;
  padding: 4px 16px 4px;
  max-width: 500px;
  overflow: hidden; 
  text-overflow: ellipsis; 
  white-space: nowrap; 
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 2px 2px 2px;
    max-width: 4rem;
    text-align: center;
  }
`;
