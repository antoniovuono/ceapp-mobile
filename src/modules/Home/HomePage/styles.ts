import { FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.SECONDARY_BACKGROUND_WHITE};
`;

export const ParksContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 5px 20px;
  justify-content: center;
`;

export const ParksList = styled(FlatList).attrs(
  {},
)`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;

export const CreateParkContent = styled.View`
  width: 100%;
  padding: 15px 20px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.PRIMARY_GRAY};
`;

export const CreateParkModal = styled.View`
  height: 340px;
  width: 336px;
  background-color: ${({ theme }) => theme.colors.SECONDARY_TITLE_WHITE};
  border-radius: 6px;
  padding: 20px;
`;

export const CreateParkTitle = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.MEDIUM};
      color: ${theme.colors.SECONDARY_TITLE};
    `};
`;

export const CreateParkSubTitle = styled.Text`
  font-size: 14px;
  margin-top: 5px;
  margin-left: 10px;
  ${({ theme }) =>
    theme &&
    css`
      font-family: ${theme.fonts.REGULAR};
      color: ${theme.colors.SECONDARY_TITLE};
    `};
`;

export const ButtonContent = styled.View`
  padding: 8px;
`;
