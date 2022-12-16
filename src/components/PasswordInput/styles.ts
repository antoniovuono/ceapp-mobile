import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  padding: 7px;
`;

export const IconContent = styled.View<{ isWhtie?: boolean }>`
  background-color: ${({ theme, isWhtie }) =>
    isWhtie
      ? theme.colors.SECONDARY_TITLE_WHITE
      : theme.colors.SECONDARY_BACKGROUND_WHITE};
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
`;

export const VisualizePassword = styled.TouchableOpacity<{ isWhtie?: boolean }>`
  background-color: ${({ theme, isWhtie }) =>
    isWhtie
      ? theme.colors.SECONDARY_TITLE_WHITE
      : theme.colors.SECONDARY_BACKGROUND_WHITE};
  width: 55px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.SECONDARY_WARNING_YELLOW};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  margin-left: 10px;
`;
