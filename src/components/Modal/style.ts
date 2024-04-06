import styled from 'styled-components'; 

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`;

export const ModalDescription = styled.p`
  width: 60%;
  display: flex;
  align-items: center; 
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%; 
  }
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.container};
  padding: 1rem;
  border-radius: 8px;
  
  width:90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  h1 {
    font-size: 2.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  div {
  display: grid;
  grid-template-columns: 1fr 1fr; 
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    font-size: 1.0rem;
  }


  p {
    display: flex;
    align-items: center;       
    gap: 0.5rem; 
    justify-content: start;  
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
}

`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.text}; /* Adiciona uma borda */
  border-radius: 50%; /* Deixa o botão redondo */
  width: 2rem; /* Define a largura do botão */
  height: 2rem; /* Define a altura do botão */
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
