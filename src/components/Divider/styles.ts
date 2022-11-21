import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 21px 31px;
`;

export const DividerContent = styled.View`
  background-color: ${({ theme }) => theme.colors.DIVIDER_GRAY};
  width: 100%;
  height: 1px;
`;
