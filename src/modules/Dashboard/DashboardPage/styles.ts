import { ScrollView } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(ScrollView).attrs({
  justifyContent: 'center',
  alignItems: 'center',
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 20px;
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
