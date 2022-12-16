import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import PrimaryButton from '../../../components/PrimaryButton';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Container,
  Divider,
  Form,
  LogoutContent,
  SubTitle,
  Title,
} from './styles';
import PasswordInput from '../../../components/PasswordInput';
import { useAuth } from '../../../hooks/user.authenticate';

const parkInfosSchema = Yup.object().shape({
  name: Yup.string(),
  password: Yup.string().min(6, 'A senha deve conter no mínimo 6 digitos'),
  confirmPassword: Yup.string().min(
    6,
    'A senha deve conter no mínimo 6 digitos',
  ),
});

const pricesSchema = Yup.object().shape({
  firs_hour: Yup.number(),
  other_hours: Yup.number(),
});

const MyProfilePage: React.FC = () => {
  const { updateProfile, token, signOut } = useAuth();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(parkInfosSchema),
  });

  const handleUpdateMyProfile = async (form: FieldValues) => {
    try {
      const { name, password, confirmPassword } = form;

      if (password !== confirmPassword) {
        console.log('Password diferentes !');
      }

      await updateProfile(name, password, token);
    } catch (err) {
      console.error(err);
      console.log('Erro ao atualizar usuário !');
    } finally {
      reset();
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Atualizar perfil</Title>
        <SubTitle>
          Entre com os valores novos para atualizar o seu usuário.
        </SubTitle>

        <Form>
          <Input
            style={{ backgroundColor: 'white' }}
            iconName="user"
            control={control}
            name="name"
            maxLength={30}
            error={errors.name && errors.name.message}
            isWhite
            placeholder="Nome do estacionamento"
          />

          <PasswordInput
            style={{ backgroundColor: 'white' }}
            iconName="lock"
            control={control}
            name="password"
            error={errors.password && errors.password.message}
            placeholder="Digite sua nova senha"
            isWhite
          />

          <PasswordInput
            style={{ backgroundColor: 'white' }}
            iconName="lock"
            control={control}
            name="confirmPassword"
            error={errors.confirmPassword && errors.confirmPassword.message}
            placeholder="Confirmar senha"
            isWhite
          />

          <PrimaryButton
            style={{ marginTop: 10, marginBottom: 10 }}
            title="atualizar perfil"
            onPressed={handleSubmit(handleUpdateMyProfile)}
          />

          <Divider />
        </Form>

        <SubTitle>
          Entre com os valores referentes a primeira hora e as demais horas que
          você quer cobrar.
        </SubTitle>

        <Form>
          <Input
            style={{ backgroundColor: 'white' }}
            iconName="user"
            control={control}
            name="first_hour"
            maxLength={30}
            error={errors.name && errors.name.message}
            isWhite
            placeholder="Primeira hora"
          />

          <Input
            style={{ backgroundColor: 'white' }}
            iconName="user"
            control={control}
            name="second_hour"
            maxLength={30}
            error={errors.name && errors.name.message}
            isWhite
            placeholder="Demais horas"
          />

          <PrimaryButton
            style={{ marginTop: 10, marginBottom: 10 }}
            title="atualizar perfil"
          />

          <Divider />
        </Form>
      </Container>

      <LogoutContent>
        <Divider />
        <PrimaryButton title="sair" isPrimary onPressed={signOut} />
      </LogoutContent>
    </>
  );
};

export default MyProfilePage;
