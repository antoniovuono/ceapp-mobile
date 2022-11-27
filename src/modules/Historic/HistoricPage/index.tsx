import React from 'react';
import Header from '../../../components/Header';
import Search from '../../../components/Search';

import { Container } from './styles';

const HistoricPage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Search />
    </Container>
  );
};

export default HistoricPage;
