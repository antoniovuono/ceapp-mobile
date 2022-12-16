import React, { useState } from 'react';
import { TextInputProps, View } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { Container, IconContent, InputText, Error } from './styles';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

interface IInputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
  control: Control;
  error: string | any;
  name: string;
  isWhite?: boolean;
}

const Input: React.FC<IInputProps> = ({
  iconName,
  value,
  name,
  control,
  error,
  isWhite,
  ...rest
}) => {
  const theme = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocused = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  return (
    <>
      <Container>
        <IconContent isWhtie={isWhite}>
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
            maxLength: 30,
          }}
          render={({ field: { onChange, value } }) => (
            <InputText
              placeholderTextColor={theme.colors.DARK_GRAY}
              onFocus={handleInputFocused}
              onBlur={handleInputBlur}
              autoCorrect={false}
              onChangeText={onChange}
              value={value}
              {...rest}
            />
          )}
        />
      </Container>

      <View>{error && <Error>{error}</Error>}</View>
    </>
  );
};

export default Input;
