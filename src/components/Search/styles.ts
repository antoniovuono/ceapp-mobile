import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  justify-content: center;
  padding: 20px;
`;

export const SearchContent = styled.View`
  flex-direction: row;
  width: 100%;
  height: 38px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: ${({ theme }) => theme.colors.SECONDARY_TITLE_WHITE};
`;

export const IconContent = styled.View`
  width: 15%;
  justify-content: center;
  align-items: center;
  border-right-width: 1.5px;
  border-right-color: ${({ theme }) => theme.colors.SECONDARY_BACKGROUND_WHITE};
`;

export const InputSearch = styled.TextInput`
  width: 65%;
  padding: 5px;
  font-family: ${({ theme }) => theme.fonts.REGULAR};
`;

export const SearchButton = styled.TouchableOpacity`
  width: 20%;
  background-color: ${({ theme }) => theme.colors.PRIMARY_WARNING_RED};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  justify-content: center;
  align-items: center;
`;
