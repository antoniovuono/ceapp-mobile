import React, { useState } from 'react';
import Header from '../../../components/Header';
import Modal from 'react-native-modal';

import { Container, ParksContainer } from './styles';
import { ModalContent } from '../../../components/WelcomeModal/styles';
import Search from '../../../components/Search';
import Park from '../../../components/Park';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <Header />

      <Modal
        style={{ justifyContent: 'center', alignItems: 'center' }}
        isVisible={isVisible}
      >
        <ModalContent />
      </Modal>

      <Search />

      <ParksContainer>
        <Park />

        <Park />
      </ParksContainer>
    </Container>
  );
};

export default HomePage;
