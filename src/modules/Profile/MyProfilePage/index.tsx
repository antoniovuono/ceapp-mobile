import React from 'react';
import Header from '../../../components/Header';
import { Container, Title } from './styles';

const MyProfilePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Title>My Profile</Title>
    </Container>
  );
};

export default MyProfilePage;
