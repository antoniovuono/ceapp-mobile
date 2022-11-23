import React from 'react';

import { ButtonContent, ButtonTitle } from './styles';

interface IButton {
  isPrimary: boolean;
  title: string;
  onPressed: () => void;
}

const PrimaryButton: React.FC<IButton> = ({
  isPrimary,
  title,
  onPressed,
  ...rest
}) => {
  return (
    <ButtonContent {...rest} isPrimary={isPrimary} onPress={onPressed}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContent>
  );
};

export default PrimaryButton;
