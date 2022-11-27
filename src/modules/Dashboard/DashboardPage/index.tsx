import React from 'react';
import Header from '../../../components/Header';
import { Container, Title } from './styles';

const DashboardPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>Dashboard</Title>
    </Container>
  );
};

export default DashboardPage;
