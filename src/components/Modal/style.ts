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
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.container};
  padding: 1rem;
  border-radius: 8px;
  
  width:90%;
  height: 90%;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;

`;
 