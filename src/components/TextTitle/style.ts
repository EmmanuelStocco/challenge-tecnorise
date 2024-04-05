import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
`;