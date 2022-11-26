import React, { useState } from 'react';
import { View, TouchableOpacityProps } from 'react-native';

import {
  Container,
  IconContent,
  InputText,
  VisualizePassword,
  Error,
} from './styles';
import { Control, Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

interface IInputProps extends TouchableOpacityProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  placeholder: string;
  value?: string;
  control: Control;
  error: string | any;
  name: string;
}

const PasswordInput: React.FC<IInputProps> = ({
  iconName,
  value,
  placeholder,
  name,
  control,
  error,
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
    <>
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

        <Controller
          control={control}
          name={name}
          rules={{
            maxLength: 25,
          }}
          render={({ field: { onChange, value } }) => (
            <InputText
              {...rest}
              placeholder={placeholder}
              placeholderTextColor={theme.colors.DARK_GRAY}
              onFocus={handleInputFocused}
              onBlur={handleInputBlur}
              autoCorrect={false}
              secureTextEntry={isPasswordIsVisible}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <VisualizePassword activeOpacity={1} onPress={handlePasswordIsVisible}>
          {isPasswordIsVisible ? (
            <Feather name="eye" size={22} color={theme.colors.DARK_GRAY} />
          ) : (
            <Feather name="eye-off" size={22} color={theme.colors.DARK_GRAY} />
          )}
        </VisualizePassword>
      </Container>

      <View>{error && <Error>{error}</Error>}</View>
    </>
  );
};

export default PasswordInput;
