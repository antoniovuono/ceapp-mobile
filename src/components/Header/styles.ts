import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND_BLUE};
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + 12}px;
  justify-content: center;
  align-items: center;
  padding: 0 19px;
`;

export const UpperLine = styled.View`
  flex-direction: row;
  padding: 10px;
`;

export const TitleContent = styled.View`
  width: 50%;
`;

export const Name = styled.Text`
  text-transform: uppercase;
  ${({ theme }) =>
    theme &&
    css`
      color: ${theme.colors.SECONDARY_BACKGROUND_WHITE};
      font-family: ${theme.fonts.BOLD};
      font-size: 16px;
    `}
`;

export const Date = styled.Text`
  margin-top: 4px;
  text-transform: capitalize;
  ${({ theme }) =>
    theme &&
    css`
      color: ${theme.colors.SECONDARY_BACKGROUND_WHITE};
      font-family: ${theme.fonts.MEDIUM};
      font-size: 12px;
    `}
`;

export const PriceContent = styled.View`
  width: 50%;
  align-items: flex-end;
`;

export const Price = styled.Text<{ greenPrice?: boolean }>`
  ${({ theme }) =>
    theme &&
    css`
      color: ${theme.colors.SECONDARY_BACKGROUND_WHITE};
      font-family: ${theme.fonts.BOLD};
      font-size: 12px;
    `}

  ${({ theme, greenPrice }) =>
    greenPrice &&
    css`
      color: ${theme.colors.SUCCESS_GREEN};
      font-family: ${theme.fonts.BOLD};
      font-size: 12px;
    `}
`;

export const PriceLabel = styled.Text`
  margin-top: 4px;
  ${({ theme }) =>
    theme &&
    css`
      color: ${theme.colors.SECONDARY_BACKGROUND_WHITE};
      font-family: ${theme.fonts.BOLD};
      font-size: 9px;
    `}
`;
