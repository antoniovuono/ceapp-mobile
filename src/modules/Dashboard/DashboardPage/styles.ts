import { ScrollView } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(ScrollView).attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const YearController = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.SECONDARY_TITLE_WHITE};
  height: 80px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 20px;
`;

export const YearLabel = styled.Text`
  font-size: 20px;
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.BOLD};
      color: ${theme.colors.PRIMARY_TITLE};
    `}
`;

export const ChartDetailsContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 20px;
`;

export const LabelContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const PrimaryLabel = styled.Text`
  font-size: 18px;
  margin-left: 5px;
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.BOLD};
      color: : ${theme.colors.PRIMARY_TITLE};
    `}
`;

export const Description = styled.Text`
  font-size: 18px;
  margin-left: 5px;
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.REGULAR};
      color: : ${theme.colors.PRIMARY_TITLE};
    `}
`;
