import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND_BLUE};
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
      color: ${theme.colors.SECONDARY_SUCCESS_GREEN};
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

export const BottomLine = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 10px 0;
  justify-content: center;
`;

export const CapacityContent = styled.View`
  width: 50%;
`;

export const Capacity = styled.Text`
  ${({ theme }) =>
    theme &&
    css`
      color: ${theme.colors.SECONDARY_BACKGROUND_WHITE};
      font-family: ${theme.fonts.BOLD};
      font-size: 13px;
    `}
`;

export const CashierContent = styled.View`
  width: 50%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Cashier = styled.Text`
  margin-left: 5px;
  ${({ theme }) =>
    theme &&
    css`
      color: ${theme.colors.SECONDARY_BACKGROUND_WHITE};
      font-family: ${theme.fonts.BOLD};
      font-size: 12px;
    `}
`;
