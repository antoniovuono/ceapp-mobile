import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND_BLUE};
`;

export const ImageContent = styled.View`
  height: 350px;
  background-color: ${({ theme }) => theme.colors.SECONDARY_TITLE_WHITE};
`;

export const BackgroundImageContent = styled.Image`
  flex: 1;
  width: 100%;
`;

export const ComunnicationContent = styled.View`
  margin-top: 30px;
`;

export const FormContent = styled.ScrollView`
  padding: 0 31px;
`;
