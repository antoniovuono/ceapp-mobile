import React from 'react';
import { render } from '@testing-library/react-native';
import Profiles from '../../../modules/Profiles';

describe('Profiles', () => {
  it('Should be able to render a title label', () => {
    const { getByTestId } = render(<Profiles />);

    const title = getByTestId('text-title');

    expect(title.props.children).toContain('Perfil');
  });

  it('Should be able to render a placeholder for username input', () => {
    const { getByPlaceholderText } = render(<Profiles />);

    const inputName = getByPlaceholderText('Nome');

    expect(inputName.props.placeholder).toBeTruthy();
  });

  it('Should be able to render a placeholder for surname input', () => {
    const { getByPlaceholderText } = render(<Profiles />);

    const surname = getByPlaceholderText('Sobrenome');

    expect(surname.props.placeholder).toBeTruthy();
  });

  it('Shold be able render a correctly data', () => {
    const { getByTestId } = render(<Profiles />);

    const inputName = getByTestId('input-name');
    const surname = getByTestId('input-surname');

    expect(inputName.props.value).toEqual('Antonio');
    expect(surname.props.value).toEqual('Vuono');
  });
});
