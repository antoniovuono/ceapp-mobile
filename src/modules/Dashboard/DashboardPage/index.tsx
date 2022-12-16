import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Bar, VictoryBar, VictoryChart } from 'victory-native';
import Header from '../../../components/Header';
import { Container } from './styles';

const data = [
  { x: 'Jan', y: 2 },
  { x: 'Fev', y: 3 },
  { x: 'Mar', y: 5 },
  { x: 'Abr', y: 4 },
  { x: 'Mai', y: 10 },
  { x: 'Jun', y: 4 },
  { x: 'Jul', y: 4 },
  { x: 'Agos', y: 4 },
  { x: 'Set', y: 4 },
  { x: 'Out', y: 4 },
  { x: 'Nov', y: 4 },
  { x: 'Dez', y: 4 },
];

const DashboardPage: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Container>
        <VictoryChart
          height={400}
          width={430}
          domainPadding={{ x: 13, y: [0, 40] }}
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
