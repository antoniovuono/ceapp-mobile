import React from 'react';
import Header from '../../../components/Header';

import { Container, Title } from './styles';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>HomePage</Title>
    </Container>
  );
};

export default HomePage;
