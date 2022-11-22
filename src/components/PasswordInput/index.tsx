import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, IconContent, InputText, VisualizePassword } from './styles';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

interface IInputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  placeholder: string;
  value?: string;
}

const PasswordInput: React.FC<IInputProps> = ({
  iconName,
  value,
  placeholder,
  ...rest
}) => {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isPasswordIsVisible, setIsPasswordIsVisible] = useState(true);

  const handleInputFocused = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  const handlePasswordIsVisible = () => {
    setIsPasswordIsVisible(prevState => !isPasswordIsVisible);
  };

  return (
    <Container>
      <IconContent>
        <Feather
          name={iconName}
          size={22}
          color={
            isFocused || isFilled
              ? theme.colors.PRIMARY_WARNING_RED
              : theme.colors.DARK_GRAY
          }
        />
      </IconContent>

      <InputText
        {...rest}
        placeholder={placeholder}
        maxLength={25}
        placeholderTextColor={theme.colors.DARK_GRAY}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        autoCorrect={false}
        secureTextEntry={isPasswordIsVisible}
      />

      <VisualizePassword activeOpacity={1} onPress={handlePasswordIsVisible}>
        {isPasswordIsVisible ? (
          <Feather name="eye" size={22} color={theme.colors.DARK_GRAY} />
        ) : (
          <Feather name="eye-off" size={22} color={theme.colors.DARK_GRAY} />
        )}
      </VisualizePassword>
    </Container>
  );
};

export default PasswordInput;
