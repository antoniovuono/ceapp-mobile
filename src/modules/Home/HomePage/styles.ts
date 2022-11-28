import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.SECONDARY_BACKGROUND_WHITE};
`;

export const ParksContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 5px 20px;
`;

export const ParksList = styled(FlatList).attrs(
  {},
)`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;
