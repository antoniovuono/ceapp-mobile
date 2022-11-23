import React from 'react';
import Modal from 'react-native-modal';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import { ModalAlert, Title, ButtonContent } from './styles';
import { useTheme } from 'styled-components';
import PrimaryButton from '../PrimaryButton';

interface IAlerts {
  title: string;
  type: 'success';
  isVisible: boolean;
  closeModalPressed: () => void;
}

const Alerts: React.FC<IAlerts> = ({
  title,
  type,
  isVisible,
  closeModalPressed,
}) => {
  const theme = useTheme();

  return (
    <Modal
      isVisible={isVisible}
      style={{ justifyContent: 'center', alignItems: 'center' }}
      backdropOpacity={0.75}
      onBackdropPress={closeModalPressed}
      animationIn="fadeIn"
      animationOut="fadeOut"
    >
      <ModalAlert>
        {type === 'success' ? (
          <AntDesign
            name="checkcircle"
            size={44}
            color={theme.colors.SUCCESS_GREEN}
          />
        ) : (
          <MaterialIcons
            name="error"
            size={44}
            color={theme.colors.SECONDARY_WARNING_YELLOW}
          />
        )}
        <Title>Usuário criado com sucesso!</Title>

        <ButtonContent>
          <PrimaryButton
            isPrimary={true}
            title="Confirmar"
            onPressed={closeModalPressed}
          />
        </ButtonContent>
      </ModalAlert>
    </Modal>
  );
};

export default Alerts;
