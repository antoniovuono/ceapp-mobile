import React, { useMemo, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

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

const Header: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentExtensiveDate, setcurrentExtensiveDate] = useState('');

  const theme = useTheme();
  const { user } = useAuth();

  useMemo(() => {
    const now = dayjs().toDate();
    const nowFormatted = dayjs(now).format('DD/MM/YYYY');
    const dayOfWeek = dayjs(now).locale('pt-br').format('dddd');

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
              {user.first_hour ? user.first_hour : '--'}
            </Price>
            <PriceLabel>Primeira hora / Demais horas</PriceLabel>
          </PriceContent>
        </UpperLine>

        <BottomLine>
          <CapacityContent>
            <Capacity>Capacidade: -- de -- </Capacity>
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
