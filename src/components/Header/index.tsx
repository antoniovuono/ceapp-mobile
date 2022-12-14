import React, { useMemo, useState } from 'react';

import {
  Container,
  Name,
  Content,
  UpperLine,
  TitleContent,
  Date,
  PriceContent,
  Price,
  PriceLabel,
} from './styles';
import { useAuth } from '../../hooks/user.authenticate';
import {
  dateStandardFormat,
  dayOfWeekFormat,
  getCurrentDate,
} from '../../utils/DateFormats';

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentExtensiveDate, setcurrentExtensiveDate] = useState('');

  const { user } = useAuth();

  useMemo(() => {
    const now = getCurrentDate();
    const nowFormatted = dateStandardFormat(now);
    const dayOfWeek = dayOfWeekFormat(now);

    setCurrentDate(nowFormatted);
    setcurrentExtensiveDate(dayOfWeek);
  }, []);

  return (
    <Container>
      <Content>
        <UpperLine>
          <TitleContent>
            <Name numberOfLines={1}>{user.name}</Name>
            <Date>
              {currentDate} - {currentExtensiveDate}
            </Date>
          </TitleContent>

          <PriceContent>
            <Price>
              {' '}
              <Price greenPrice>R$</Price>{' '}
              {user.first_hour ? user.first_hour : '--'} /{' '}
              <Price greenPrice>R$</Price>{' '}
              {user.first_hour ? user.other_hours : '--'}
            </Price>
            <PriceLabel>Primeira hora / Demais horas</PriceLabel>
          </PriceContent>
        </UpperLine>
      </Content>
    </Container>
  );
};

export default Header;
