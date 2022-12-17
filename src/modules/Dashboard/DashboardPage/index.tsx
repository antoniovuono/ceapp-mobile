import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { VictoryBar, VictoryChart } from 'victory-native';
import Header from '../../../components/Header';
import { usePark } from '../../../hooks/park';
import { useAuth } from '../../../hooks/user.authenticate';
import { Container } from './styles';

const DashboardPage: React.FC = () => {
  const { token } = useAuth();

  const [january, setJanuary] = useState(0);
  const [febuary, setFebuary] = useState(0);
  const [march, setMarch] = useState(0);
  const [april, setApril] = useState(0);
  const [may, setMay] = useState(0);
  const [june, setJune] = useState(0);
  const [july, setJalu] = useState(0);
  const [august, setAugust] = useState(0);
  const [setember, setSetember] = useState(0);
  const [october, setOctober] = useState(0);
  const [november, setNovember] = useState(0);
  const [dezember, setDezember] = useState(0);
  const theme = useTheme();
  const { closedParks } = usePark();

  const data = [
    { x: 'Jan', y: january, label: `R$${january}` },
    { x: 'Fev', y: febuary, label: `R$${febuary}` },
    { x: 'Mar', y: march, label: `R$${march}` },
    { x: 'Abr', y: april, label: `R$${april}` },
    { x: 'Mai', y: may, label: `R$${may}` },
    { x: 'Jun', y: june, label: `R$${june}` },
    { x: 'Jul', y: july, label: `R$${july}` },
    { x: 'Agos', y: august, label: `R$${august}` },
    { x: 'Set', y: setember, label: `R$${setember}` },
    { x: 'Out', y: october, label: `R$${october}` },
    { x: 'Nov', y: november, label: `R$${november}` },
    { x: 'Dez', y: dezember, label: `R$${dezember}` },
  ];

  const januaryTotalAmount = () => {
    const dezemberParks = closedParks.filter(element => {
      const formatted = Intl.DateTimeFormat('pt-BR', {
        month: 'long',
        timeZone: 'UTC',
      }).format(new Date(element.left_date));

      return formatted === 'janeiro';
    });

    const amountList = dezemberParks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setJanuary(sum);
  };

  const dezembeTotalAmount = () => {
    const dezemberParks = closedParks.filter(element => {
      const formatted = Intl.DateTimeFormat('pt-BR', {
        month: 'long',
        timeZone: 'UTC',
      }).format(new Date(element.left_date));

      return formatted === 'dezembro';
    });

    const amountList = dezemberParks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setDezember(sum);
  };

  useEffect(() => {
    januaryTotalAmount();
    dezembeTotalAmount();
  }, [closedParks]);

  return (
    <>
      <Header />
      <Container>
        <VictoryChart
          height={420}
          width={420}
          domainPadding={{ x: [21, 14], y: [10, 40] }}
        >
          <VictoryBar
            style={{
              data: {
                fill: theme.colors.SUCCESS_GREEN,
                width: 18,
              },
              labels: {},
            }}
            data={data}
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onPressIn: () => {
                    return [
                      {
                        target: 'data',
                        mutation: () => ({
                          style: {
                            fill: theme.colors.SECONDARY_WARNING_YELLOW,
                            width: 18,
                          },
                        }),
                      },
                    ];
                  },
                },
              },
            ]}
          />
        </VictoryChart>
      </Container>
    </>
  );
};

export default DashboardPage;
