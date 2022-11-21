import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND_BLUE};
`;

export const WelcomeTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BOLD};
`;
