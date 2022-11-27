import React, { useState } from 'react';
import Header from '../../../components/Header';
import Modal from 'react-native-modal';

import { Container } from './styles';
import { ModalContent } from '../../../components/WelcomeModal/styles';

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
    </Container>
  );
};

export default HomePage;
