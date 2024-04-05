import styled from 'styled-components';

export const ToggleButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 2rem;
  margin-top: 2rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }
`;