import React, { useState } from 'react';
import Divider from '../../../components/Divider';
import Input from '../../../components/Input';
import SlogamBox from '../components/SlogamBox';

import { Container, CommunicationContent, FormContent } from './styles';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Container>
      <CommunicationContent>
        <SlogamBox
          title="ceapp"
          subtitle={`Controle total sobre o fluxo \ndo seu estacionamento`}
          description="Entre com os dados e realize seu cadastro na plataforma:"
        />
      </CommunicationContent>

      <Divider />

      <FormContent>
        <Input
          placeholder="Name"
          iconName="user"
          onChangeText={setName}
          value={name}
          keyboardType="default"
          autoCapitalize="words"
        />
        <Input
          placeholder="E-mail"
          iconName="mail"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </FormContent>
    </Container>
  );
};

export default SignUp;
