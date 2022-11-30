import React, { useMemo, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

import {
  Container,
  Name,
  Content,
  UpperLine,
  TitleContent,
  Date,
  BottomLine,
  PriceContent,
  Price,
  PriceLabel,
  Cashier,
  Capacity,
  CashierContent,
  CapacityContent,
} from './styles';
import { useTheme } from 'styled-components';
import { useAuth } from '../../hooks/user.authenticate';
import {
  dateStandardFormat,
  dayOfWeekFormat,
  getCurrentDate,
} from '../../utils/DateFormats';

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentExtensiveDate, setcurrentExtensiveDate] = useState('');

  const theme = useTheme();
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

        <BottomLine>
          <CapacityContent>
            <Capacity>Capacidade: -- </Capacity>
          </CapacityContent>

          <CashierContent>
            <FontAwesome5
              name="money-bill"
              size={12}
              color={theme.colors.SECONDARY_SUCCESS_GREEN}
            />
            <Cashier>Caixa: R$ --,--</Cashier>
          </CashierContent>
        </BottomLine>
      </Content>
    </Container>
  );
};

export default Header;
