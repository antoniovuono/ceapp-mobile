import React, { useState } from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import {
  Container,
  IconContent,
  InputSearch,
  SearchButton,
  SearchContent,
} from './styles';
import { useTheme } from 'styled-components/native';

interface ITextProps {
  value?: string;
  onChangeValue?: any;
  onPressed?: () => void;
}

const Search: React.FC<ITextProps> = ({ value, onChangeValue, onPressed }) => {
  const [inFocus, setInFocus] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const theme = useTheme();

  const handleInFocus = () => {
    setInFocus(true);
  };

  const handleOnBlur = () => {
    setInFocus(false);
    setIsFilled(!!value);
  };

  return (
    <Container>
      <SearchContent>
        <IconContent>
          <AntDesign
            name="idcard"
            size={24}
            color={
              inFocus || isFilled
                ? theme.colors.PRIMARY_WARNING_RED
                : theme.colors.PRIMARY_GRAY
            }
          />
        </IconContent>

        <InputSearch
          testID="input-search"
          placeholder="Pesquisar por placa"
          placeholderTextColor={theme.colors.PRIMARY_GRAY}
          onFocus={handleInFocus}
          onBlur={handleOnBlur}
          value={value}
          onChangeText={onChangeValue}
          maxLength={27}
        />

        <SearchButton onPress={onPressed}>
          <FontAwesome
            name="search"
            size={19}
            color={theme.colors.SECONDARY_TITLE_WHITE}
          />
        </SearchButton>
      </SearchContent>
    </Container>
  );
};

export default Search;
