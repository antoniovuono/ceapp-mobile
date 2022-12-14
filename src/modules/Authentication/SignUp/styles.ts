import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.PRIMARY_BACKGROUND_BLUE};
`;

export const CommunicationContent = styled.View`
  margin-top: ${getStatusBarHeight() + 130}px;
`;

export const FormContent = styled.ScrollView`
  padding: 0 31px;
  margin-bottom: 25px;
`;
