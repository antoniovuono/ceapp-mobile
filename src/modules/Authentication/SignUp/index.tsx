import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Alerts from '../../../components/Alerts';
import Divider from '../../../components/Divider';
import Input from '../../../components/Input';
import PasswordInput from '../../../components/PasswordInput';
import PrimaryButton from '../../../components/PrimaryButton';
import { signUpRequest } from '../../../services/requisitions/UsersRequests';
import CadasterText from '../components/CadasterText';
import SlogamBox from '../components/SlogamBox';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container, CommunicationContent, FormContent } from './styles';

interface IFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Formato inválido: exemplo@email.com')
    .required('O email é obrigatório'),
  password: Yup.string().min(6).required('A senha é obrigatória.'),
  confirmPassword: Yup.string()
    .min(6)
    .required('É necessário confirmar sua senha.'),
  cpf: Yup.string().min(11).required('CPF/CNPJ é obrigatório.'),
});

const SignUp: React.FC = () => {
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorModalVisible, seterrorModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleNavigateToSignIn = () => {
    navigation.goBack();
  };

  const handleCloseModal = () => {
    setSuccessModalVisible(false);
    seterrorModalVisible(false);
  };

  const handleCreateAccount = async (form: IFormData) => {
    setLoading(true);
    try {
      const { name, email, password, confirmPassword, cpf } = form;

      if (password === confirmPassword) {
        await signUpRequest({ name, email, password, cpf });
        setSuccessModalVisible(true);
        setModalTitle('Usuário criado com sucesso!');
        reset();
      } else {
        seterrorModalVisible(true);
        setModalTitle('As senhas que você digitou são diferentes!');
      }
    } catch (error) {
      seterrorModalVisible(true);
      setModalTitle(
        'Não foi possível criar o seu usuário, tente novamente mais tarde!',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Alerts
          isVisible={successModalVisible}
          closeModalPressed={handleCloseModal}
          title="Usuário criado com sucesso!"
          type="success"
        />
        <Alerts
          isVisible={errorModalVisible}
          closeModalPressed={handleCloseModal}
          title={modalTitle}
          type="error"
        />
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
            keyboardType="default"
            autoCapitalize="words"
            control={control}
            name="name"
            error={errors.name && errors.name.message}
          />
          <Input
            placeholder="E-mail"
            iconName="mail"
            keyboardType="email-address"
            autoCapitalize="none"
            control={control}
            name="email"
            error={errors.email && errors.email.message}
          />
          <PasswordInput
            iconName="lock"
            placeholder="Senha"
            control={control}
            name="password"
            error={errors.password && errors.password.message}
          />
          <PasswordInput
            iconName="lock"
            placeholder="Confirmar senha"
            control={control}
            name="confirmPassword"
            error={errors.confirmPassword && errors.confirmPassword.message}
          />
          <Input
            placeholder="CPF/CNPJ"
            iconName="credit-card"
            keyboardType="numeric"
            autoCapitalize="none"
            control={control}
            name="cpf"
            error={errors.cpf && errors.cpf.message}
          />

          <PrimaryButton
            isPrimary
            title="CADASTRAR"
            onPressed={handleSubmit(handleCreateAccount)}
            isLoading={loading}
            style={{ marginTop: 10 }}
          />
          <CadasterText />

          <PrimaryButton
            isPrimary={false}
            title="VOLTAR AO LOGIN"
            onPressed={handleNavigateToSignIn}
          />
        </FormContent>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
