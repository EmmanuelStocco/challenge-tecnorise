import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  height: 3rem;
  background-color: ${(props) => props.theme.colors.container};
  border-radius: 25px;
  padding: 0 1rem;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 90%;
    max-width: 35rem;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  margin-left: 1rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.text};
  }
`;


export const ButtonSearch = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  width: 15%;
  right: 0;
  height: 3rem;
  position: absolute;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
  cursor: pointer;
`;