import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import Divider from '../../../components/Divider';
import Input from '../../../components/Input';
import PasswordInput from '../../../components/PasswordInput';
import PrimaryButton from '../../../components/PrimaryButton';
import CadasterText from '../components/CadasterText';
import SlogamBox from '../components/SlogamBox';

import { Container, CommunicationContent, FormContent } from './styles';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [card, setCard] = useState('');

  const navigation = useNavigation();

  const handleNavigateToSignIn = () => {
    navigation.goBack();
  };

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
        <PasswordInput
          iconName="lock"
          placeholder="Senha"
          autoCapitalize="none"
          onChangeText={setPassword}
          value={password}
          keyboardType="default"
        />
        <PasswordInput
          iconName="lock"
          placeholder="Senha"
          autoCapitalize="none"
          onChangeText={setPassword}
          value={password}
          keyboardType="default"
        />
        <Input
          placeholder="CPF/CNPJ"
          iconName="credit-card"
          onChangeText={setCard}
          value={card}
          keyboardType="number-pad"
          autoCapitalize="none"
        />

        <PrimaryButton isPrimary title="CADASTRAR" />
        <CadasterText />

        <PrimaryButton
          isPrimary={false}
          title="CADASTRAR"
          onPressed={handleNavigateToSignIn}
        />
      </FormContent>
    </Container>
  );
};

export default SignUp;
