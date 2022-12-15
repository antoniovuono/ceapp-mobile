import React from 'react';

import { WelcomeModalContent, SubTitle, Title } from './styles';

const WelcomeModal: React.FC = () => {
  return (
    <WelcomeModalContent>
      <Title>Informação necessárias</Title>
      <SubTitle>Entre com os dados para completar o seu cadastro</SubTitle>
    </WelcomeModalContent>
  );
};

export default WelcomeModal;
