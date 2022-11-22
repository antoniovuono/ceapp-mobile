import React from 'react';

import { ButtonContent, ButtonTitle } from './styles';

interface IButton {
  isPrimary: boolean;
  title: string;
}

const PrimaryButton: React.FC<IButton> = ({ isPrimary, title, ...rest }) => {
  return (
    <ButtonContent {...rest} isPrimary={isPrimary}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContent>
  );
};

export default PrimaryButton;
