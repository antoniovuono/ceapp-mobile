import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Você deve usar um formato de e-mail: exemplo@email.com')
    .required('E-mail é obrigatório.'),
  password: Yup.string().min(6).required('A senha é obrigatória.'),
});

const SignIn: React.FC = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
          keyboardType="email-address"
          control={control}
          name="E-mail"
          error={errors.email && errors.email.message}
        />

        <PasswordInput
          iconName="lock"
          placeholder="Senha"
          control={control}
          name="password"
          error={errors.password && errors.password.message}
        />

        <PrimaryButton isPrimary title="Entrar" onPressed={handleSubmit()} />
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
