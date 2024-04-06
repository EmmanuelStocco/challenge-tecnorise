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
  @media screen and (max-width: 768px) {
    width: 100%; 
  }
`;

export const TableHead = styled.thead`
  background-color: ${(props) => props.theme.colors.secondary};
  /* border-radius: 15px; */
`;

export const TableHeadRow = styled.tr`  
`;

export const TableHeadCell = styled.th`
  /* padding: 8px; */
  text-align: center;
  font-size: 1.5rem;
  /* border-bottom: 0.5px solid ${(props) => props.theme.colors.text}; */
  /* border-right: 0.5px solid ${(props) => props.theme.colors.text};  */
  /* border-radius: 15px;  */
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  padding: 4px 16px 4px;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    /* padding: 0.5rem; */
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
  /* padding: 8px; */
  font-size: 1.2rem;
  text-align: start;
  /* border-bottom: 1px solid ${(props) => props.theme.colors.text}; */
   /* border-right: 1px solid ${(props) => props.theme.colors.text}; */
  /* border-left: 1px solid ${(props) => props.theme.colors.text}; */
  padding: 4px 16px 4px;
  max-width: 500px;
  overflow: hidden; /* Esconde o texto que transborda */
  text-overflow: ellipsis; /* Adiciona reticências (...) ao texto que transborda */
  white-space: nowrap; /* Impede a quebra de linha */

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 2px 8px 2px;
    max-width: 4rem;

  }
`;
