import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ParksContainer = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  justify-content: center;
`;

export const ParksList = styled(FlatList).attrs(
  {},
)`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;
