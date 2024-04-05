import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 25rem;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 5px;
  padding: 0 1rem;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
`;