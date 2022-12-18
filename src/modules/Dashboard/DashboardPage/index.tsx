import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory-native';
import Header from '../../../components/Header';
import { usePark } from '../../../hooks/park';
import {
  ChevronLeftButton,
  ChevronRightButton,
  Container,
  YearController,
  YearLabel,
} from './styles';
import { Entypo } from '@expo/vector-icons';
import {
  addOneYear,
  getCurrentYear,
  getMonthAndYear,
  subtractOneYear,
} from '../../../utils/DateFormats';

const DashboardPage: React.FC = () => {
  const theme = useTheme();
  const { closedParks } = usePark();

  const [currentYear, setCurrentYear] = useState('');
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
    const januaryParks = closedParks.filter(element => {
      const result = getMonthAndYear(element.left_date);

      return result === `janeiro de ${currentYear}`;
    });

    const amountList = januaryParks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setJanuary(sum);
  };

  const dezemberTotalAmount = () => {
    const dezemberParks = closedParks.filter(element => {
      const result = getMonthAndYear(element.left_date);

      return result === `dezembro de ${currentYear}`;
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

  const handleGoTPreviousYear = () => {
    const response = subtractOneYear(Number(currentYear));

    setCurrentYear(String(response));
  };

  const handleGoToNextYear = () => {
    const response = addOneYear(Number(currentYear));

    setCurrentYear(String(response));
  };

  useEffect(() => {
    const getYear = () => {
      const currentYear = getCurrentYear(new Date());

      setCurrentYear(currentYear);
    };
    getYear();
  }, []);

  useEffect(() => {
    januaryTotalAmount();
    dezemberTotalAmount();
  }, [closedParks]);

  return (
    <>
      <Header />

      <YearController>
        <ChevronLeftButton
          hitSlop={{ top: 30, bottom: 30, right: 30, left: 30 }}
          onPress={handleGoTPreviousYear}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </ChevronLeftButton>

        <YearLabel> {currentYear} </YearLabel>

        <ChevronRightButton
          hitSlop={{ top: 30, bottom: 30, right: 30, left: 30 }}
          onPress={handleGoToNextYear}
        >
          <Entypo name="chevron-right" size={24} color="black" />
        </ChevronRightButton>
      </YearController>

      <Container>
        <VictoryChart
          height={400}
          width={415}
          domainPadding={{ x: [13, 8], y: [10, 40] }}
        >
          <VictoryAxis />

          <VictoryBar
            style={{
              data: {
                fill: theme.colors.SUCCESS_GREEN,
                width: 18,
              },
              labels: {
                fontSize: 13,
                padding: 5,
              },
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
