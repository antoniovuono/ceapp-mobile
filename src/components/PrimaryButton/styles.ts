import styled, { css } from 'styled-components/native';

export const ButtonContent = styled.TouchableOpacity<{ isPrimary?: boolean }>`
  width: 100%;
  height: 50px;
  background-color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.colors.PRIMARY_WARNING_RED : theme.colors.CLEAR_BLUE};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  font-size: 14px;
  ${({ theme }) => css`
    color: ${theme.colors.SECONDARY_BACKGROUND_WHITE};
    font-family: ${theme.fonts.SEMI_BOLD};
  `}
  text-transform: uppercase;
`;
