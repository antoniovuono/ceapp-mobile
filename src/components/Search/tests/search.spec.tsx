import React from 'react';
import { render } from '@testing-library/react-native';

import Search from '../';

import { ThemeProvider } from 'styled-components/native';
import theme from '../../../global/styles/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const Providers: React.FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

describe('Search Component', () => {
  it('Should be able to render a placeholder', () => {
    const { getByTestId } = render(<Search />, {
      wrapper: Providers,
    });

    const placeholder = 'Pesquisar por placa';

    const input = getByTestId('input-search');

    expect(input.props.placeholder).toBeTruthy();
    expect(input.props.placeholder).toEqual(placeholder);
  });

  it('Should be able to get a value from  a input text', () => {
    const { getByTestId } = render(<Search value="MIO-321" />, {
      wrapper: Providers,
    });

    const inputValue = 'MIO-321';

    const input = getByTestId('input-search');

    expect(input.props.value).toEqual(inputValue);
  });

  it('Should be able enter maximum of 27 characters', () => {
    const { getByTestId } = render(<Search />, {
      wrapper: Providers,
    });

    const input = getByTestId('input-search');

    expect(input.props.maxLength).toEqual(27);
  });

  it('Should be able to render a correctly color and font from a placeholder text', () => {
    const { getByTestId } = render(<Search />, {
      wrapper: Providers,
    });

    const input = getByTestId('input-search');

    expect(input.props.placeholderTextColor).toEqual(theme.colors.PRIMARY_GRAY);
    expect(input.props.style[0].fontFamily).toEqual(theme.fonts.REGULAR);
  });
});
