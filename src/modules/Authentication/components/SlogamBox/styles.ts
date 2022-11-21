import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  padding: 0 31px;
`;

export const Title = styled.Text`
  font-size: 38px;
  text-transform: uppercase;
  margin-bottom: 10px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.BOLD};
    color: ${theme.colors.SECONDARY_TITLE_WHITE};
  `}
`;

export const SubTitle = styled.Text`
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 10px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.MEDIUM};
    color: ${theme.colors.SECONDARY_TITLE_WHITE};
  `}
`;

export const Description = styled.Text`
  font-size: 15px;
  line-height: 18px;
  ${({ theme }) => css`
    font-family: ${theme.fonts.REGULAR};
    color: ${theme.colors.SECONDARY_TITLE_WHITE};
  `}
`;
