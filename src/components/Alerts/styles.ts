import styled, { css } from 'styled-components/native';

export const ModalAlert = styled.View`
  background-color: ${({ theme }) => theme.colors.SECONDARY_BACKGROUND_WHITE};
  height: 250px;
  width: 300px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0 2px;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
  ${({ theme }) =>
    theme &&
    css`
      color: ${theme.colors.SECONDARY_GRAY};
      font-family: ${theme.fonts.MEDIUM};
    `}
  margin-bottom: 30px
`;

export const ButtonContent = styled.View`
  width: 100%;
  padding: 0 75px;
`;
