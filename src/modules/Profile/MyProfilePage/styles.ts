import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 18px 33px;
  background-color: ${({ theme }) => theme.colors.SECONDARY_BACKGROUND_WHITE};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.SEMI_BOLD};
  color: ${({ theme }) => theme.colors.THIRD_TITLE};
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
  color: ${({ theme }) => theme.colors.PRIMARY_TITLE};
  margin-top: 7px;
`;

export const LogoutContent = styled.View`
  padding: 18px 33px;
  background-color: ${({ theme }) => theme.colors.SECONDARY_BACKGROUND_WHITE};
`;

export const Divider = styled.View`
  width: 100%;
  height: 1.5px;
  background-color: ${({ theme }) => theme.colors.BORDER_GRAY};
  margin-bottom: 10px;
`;

export const Form = styled.View`
  margin-top: 10px;
`;
