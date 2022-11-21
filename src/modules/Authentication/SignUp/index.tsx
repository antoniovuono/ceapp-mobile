import React from 'react';
import SlogamBox from '../components/SlogamBox';

import { Container, CommunicationContent } from './styles';

const SignUp: React.FC = () => {
  return (
    <Container>
      <CommunicationContent>
        <SlogamBox
          title="ceapp"
          subtitle={`Controle total sobre o fluxo \ndo seu estacionamento`}
          description="Entre com os dados e realize seu cadastro na plataforma:"
        />
      </CommunicationContent>
    </Container>
  );
};

export default SignUp;
