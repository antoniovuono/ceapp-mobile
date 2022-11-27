import styled, { css } from 'styled-components/native';

export const Content = styled.View<{ isOut: boolean }>`
  margin-bottom: 10px;
  border-radius: 6px;
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.SECONDARY_TITLE_WHITE};
  padding: 10px;

  border-left-color: ${({ theme, isOut }) =>
    isOut ? theme.colors.SUCCESS_GREEN : theme.colors.PRIMARY_WARNING_RED};
  border-left-width: 8px;
`;

export const InformationsContent = styled.View`
  width: 85%;
`;

export const UpperLine = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CarDetailsContent = styled.View``;

export const CarPlateAndColorContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CarPlateId = styled.Text`
  font-size: 14px;
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.BOLD};
      color: ${theme.colors.PRIMARY_TITLE};
    `}
`;

export const Color = styled.Text`
  font-size: 11px;
  margin-left: 5px;
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.REGULAR};
      color: ${theme.colors.PRIMARY_TITLE};
    `}
`;

export const CarBrandAndModel = styled.Text`
  font-size: 12px;
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.REGULAR};
      color: ${theme.colors.PRIMARY_TITLE};
    `}
`;

export const ParkingDetails = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PartialInfos = styled.Text<{ bold?: boolean }>`
  font-size: 10px;
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.REGULAR};
      color: ${theme.colors.PRIMARY_TITLE};
    `}

  ${({ bold }) =>
    bold &&
    css`
      font-family: ${({ theme }) => theme.fonts.BOLD};
    `}
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.BORDER_GRAY};
  margin-top: 5px;
`;

export const BottomLine = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const DepartueContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LeftContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateTimeInfos = styled.Text<{ bold?: boolean }>`
  font-size: 10px;
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.REGULAR};
      color: ${theme.colors.PRIMARY_TITLE};
    `}

  ${({ bold }) =>
    bold &&
    css`
      font-family: ${({ theme }) => theme.fonts.BOLD};
    `}
`;

export const ButtonContent = styled.TouchableOpacity`
  width: 15%;
  justify-content: center;
  align-items: center;
`;
