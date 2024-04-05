import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 35rem;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.container};
  border-radius: 25px;
  padding: 0 1rem;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
`;