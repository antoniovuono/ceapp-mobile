import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.MEDIUM};
    color: ${theme.colors.SECONDARY_BACKGROUND_WHITE};
  `};
`;
