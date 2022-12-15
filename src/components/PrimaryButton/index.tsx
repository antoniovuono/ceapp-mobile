import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import { ButtonContent, ButtonTitle } from './styles';

interface IButton extends TouchableOpacityProps {
  isPrimary: boolean;
  title: string;
  onPressed: () => void;
  isLoading?: boolean;
}

const PrimaryButton: React.FC<IButton> = ({
  isPrimary,
  title,
  onPressed,
  isLoading,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <ButtonContent
      {...rest}
      isPrimary={isPrimary}
      onPress={onPressed}
      activeOpacity={0.7}
    >
      {isLoading ? (
        <ActivityIndicator color={theme.colors.SECONDARY_BACKGROUND_WHITE} />
      ) : (
        <ButtonTitle>{title}</ButtonTitle>
      )}
    </ButtonContent>
  );
};

export default PrimaryButton;
