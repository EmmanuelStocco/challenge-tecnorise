import React, { ReactNode } from 'react';
import { Container } from './style';

interface HomePageProps {
  children: ReactNode;
}

const HomePage: React.FC<HomePageProps> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default HomePage;
