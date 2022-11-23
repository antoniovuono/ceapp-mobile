import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import BackgroundImage from '../../.././assets/images/background-signin.png';
import Divider from '../../../components/Divider';
import Input from '../../../components/Input';
import PasswordInput from '../../../components/PasswordInput';
import PrimaryButton from '../../../components/PrimaryButton';
import CadasterText from '../components/CadasterText';
import SlogamBox from '../components/SlogamBox';
import {
  Container,
  ImageContent,
  BackgroundImageContent,
  ComunnicationContent,
  FormContent,
} from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleNavigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Container>
      <ImageContent>
        <BackgroundImageContent source={BackgroundImage} />
      </ImageContent>

      <ComunnicationContent>
        <SlogamBox
          title="CEAPP"
          subtitle="Controle total sobre o fluxo do seu estacionamento"
          description="Entre com os dados de acesso:"
        />
      </ComunnicationContent>

      <Divider />

      <FormContent>
        <Input
          iconName="user"
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <PasswordInput
          iconName="lock"
          placeholder="Senha"
          autoCapitalize="none"
          onChangeText={setPassword}
          value={password}
        />

        <PrimaryButton isPrimary title="Entrar" onPressed={() => {}} />
        <CadasterText />
        <PrimaryButton
          isPrimary={false}
          title="Cadastrar"
          onPressed={handleNavigateToSignUp}
        />
      </FormContent>
    </Container>
  );
};

export default SignIn;
