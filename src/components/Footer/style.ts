import styled from 'styled-components';


export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.text};
  padding: 0.5rem;
  text-align: center;

  @media screen and (max-width: 768px) {  
    padding-left: 4px;
    padding-right: 4px;
    padding-top: 1px;
    padding-bottom: 1px;
    font-size: 0.8rem;
  }
`;
