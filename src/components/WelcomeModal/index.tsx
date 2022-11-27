import React from 'react';

import { ModalContent, SubTitle, Title } from './styles';

const WelcomeModal: React.FC = () => {
  return (
    <ModalContent>
      <Title>Informação necessárias</Title>
      <SubTitle>Entre com os dados para completar o seu cadastro</SubTitle>
    </ModalContent>
  );
};

export default WelcomeModal;
