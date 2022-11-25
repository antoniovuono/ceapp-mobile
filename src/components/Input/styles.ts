import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
`;

export const IconContent = styled.View`
  background-color: ${({ theme }) => theme.colors.SECONDARY_BACKGROUND_WHITE};
  width: 55px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-right-width: 2px;
  border-right-color: ${({ theme }) => theme.colors.BORDER_GRAY};
  justify-content: center;
  align-items: center;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.SECONDARY_BACKGROUND_WHITE};
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  height: 44px;
  padding: 0 15px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.PRIMARY_WARNING_RED};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  margin: 7px 0;
`;
