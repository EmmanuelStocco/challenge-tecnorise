import React from 'react'; 
import { Title, Container } from './style';

interface TextTitleProps {
  title: string;
}



const TextTitle: React.FC<TextTitleProps> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title> 
    </Container>
  );
};

export default TextTitle;
