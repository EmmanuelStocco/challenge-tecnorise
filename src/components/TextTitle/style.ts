import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {    
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.titleText};
  font-size: 2.7rem;
  @media screen and (max-width: 768px) {  
    font-size: 1.8rem;
  }
`;