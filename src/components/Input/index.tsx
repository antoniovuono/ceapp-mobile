import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, IconContent, InputText } from './styles';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

interface IInputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  placeholder: string;
}

const Input: React.FC<IInputProps> = ({ iconName, placeholder, ...rest }) => {
  const theme = useTheme();

  return (
    <Container>
      <IconContent>
        <Feather name={iconName} size={22} color={theme.colors.DARK_GRAY} />
      </IconContent>

      <InputText
        {...rest}
        placeholder={placeholder}
        maxLength={30}
        placeholderTextColor={theme.colors.DARK_GRAY}
      />
    </Container>
  );
};

export default Input;
