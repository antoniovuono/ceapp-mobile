import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import Header from '../../../components/Header';
import { usePark } from '../../../hooks/park';
import {
  ChartDetailsContent,
  Container,
  Description,
  LabelContent,
  PrimaryLabel,
  YearController,
  YearLabel,
} from './styles';
import {
  addOneYear,
  getCurrentDate,
  getCurrentYear,
  getMonth,
  getMonthAndYear,
  subtractOneYear,
} from '../../../utils/DateFormats';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DashboardPage: React.FC = () => {
  const theme = useTheme();
  const { closedParks } = usePark();

  const [currentYear, setCurrentYear] = useState('');
  const [mounthAmount, setMounthAmount] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  const [totalYearAmount, setTotalYearAmount] = useState(0);
  const [january, setJanuary] = useState(0);
  const [febuary, setFebuary] = useState(0);
  const [march, setMarch] = useState(0);
  const [april, setApril] = useState(0);
  const [may, setMay] = useState(0);
  const [june, setJune] = useState(0);
  const [july, setJuly] = useState(0);
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

  const febuaryTotalAmount = () => {
    const febuaryParks = closedParks.filter(element => {
      const result = getMonthAndYear(element.left_date);

      return result === `fevereiro de ${currentYear}`;
    });

    const amountList = febuaryParks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setFebuary(sum);
  };

  const marchTotalAmount = () => {
    const marchParks = closedParks.filter(element => {
      const result = getMonthAndYear(element.left_date);

      return result === `mar??o de ${currentYear}`;
    });

    const amountList = marchParks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setMarch(sum);
  };

  const aprilTotalAmount = () => {
    const aprilParks = closedParks.filter(element => {
      const result = getMonthAndYear(element.left_date);

      return result === `abril de ${currentYear}`;
    });

    const amountList = aprilParks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setApril(sum);
  };

  const mayTotalAmount = () => {
    const mayParks = closedParks.filter(element => {
      const result = getMonthAndYear(element.left_date);

      return result === `maio de ${currentYear}`;
    });

    const amountList = mayParks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setMay(sum);
  };

  const juneTotalAmount = () => {
    const juneParks = closedParks.filter(element => {
      const result = getMonthAndYear(element.left_date);

      return result === `junho de ${currentYear}`;
    });

    const amountList = juneParks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setJune(sum);
  };

  const julyTotalAmount = () => {
    const julyParks = closedParks.filter(element => {
      const result = getMonthAndYear(element.left_date);

      return result === `julho de ${currentYear}`;
    });

    const amountList = julyParks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setJuly(sum);
  };

  const augustTotalAmount = () => {
    const augustParks = closedParks.filter(element => {
      const result = getMonthAndYear(element.left_date);

      return result === `agosto de ${currentYear}`;
    });

    const amountList = augustParks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setAugust(sum);
  };

  const setemberTotalAmount = () => {
    const setemberParks = closedParks.filter(element => {
      const result = getMonthAndYear(element.left_date);

      return result === `setembro de ${currentYear}`;
    });

    const amountList = setemberParks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setSetember(sum);
  };

  const octoberTotalAmount = () => {
    const octoberParks = closedParks.filter(element => {
      const result = getMonthAndYear(element.left_date);

      return result === `outubro de ${currentYear}`;
    });

    const amountList = octoberParks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setOctober(sum);
  };

  const novemberTotalAmount = () => {
    const novemberParks = closedParks.filter(element => {
      const result = getMonthAndYear(element.left_date);

      return result === `novembro de ${currentYear}`;
    });

    const amountList = novemberParks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setNovember(sum);
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

  const yearTotalAmount = () => {
    let sumOfYear = 0;
    data.forEach(element => {
      sumOfYear += element.y;
    });

    setTotalYearAmount(sumOfYear);
  };

  const handleGoTPreviousYear = () => {
    const response = subtractOneYear(Number(currentYear));

    setCurrentYear(String(response));
  };

  const handleGoToNextYear = () => {
    const response = addOneYear(Number(currentYear));

    setCurrentYear(String(response));
  };

  const selectedMonthController = () => {
    const currentDate = getCurrentDate();
    const convertedMonth = getMonth(currentDate);

    const parks = closedParks.filter(element => {
      const result = getMonthAndYear(element.left_date);

      return result === `${convertedMonth} de ${currentYear}`;
    });

    const amountList = parks.map(element => {
      return Number(element.total_amount);
    });

    let sum = 0;
    amountList.forEach(element => {
      sum += element;
    });

    setCurrentMonth(convertedMonth);
    setMounthAmount(sum);
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
    febuaryTotalAmount();
    marchTotalAmount();
    aprilTotalAmount();
    mayTotalAmount();
    juneTotalAmount();
    julyTotalAmount();
    augustTotalAmount();
    setemberTotalAmount();
    octoberTotalAmount();
    novemberTotalAmount();
    dezemberTotalAmount();
    yearTotalAmount();
    selectedMonthController();
  }, [closedParks]);

  return (
    <>
      <Header />

      <YearController>
        <TouchableOpacity
          hitSlop={{ top: 30, bottom: 30, right: 30, left: 30 }}
          onPress={handleGoTPreviousYear}
        >
          <Entypo name="chevron-left" size={24} color="black" />
        </TouchableOpacity>

        <YearLabel> {currentYear} </YearLabel>

        <TouchableOpacity
          hitSlop={{ top: 30, bottom: 30, right: 30, left: 30 }}
          onPress={handleGoToNextYear}
        >
          <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
      </YearController>

      <ChartDetailsContent>
        <LabelContent>
          <MaterialIcons
            name="attach-money"
            size={20}
            color={theme.colors.SUCCESS_GREEN}
          />
          <PrimaryLabel>Total do ano:</PrimaryLabel>
          <Description>R${totalYearAmount}</Description>
        </LabelContent>

        <LabelContent>
          <MaterialIcons
            name="attach-money"
            size={20}
            color={theme.colors.SUCCESS_GREEN}
          />
          <PrimaryLabel>{currentMonth}:</PrimaryLabel>
          <Description>R${mounthAmount}</Description>
        </LabelContent>
      </ChartDetailsContent>

      <Container>
        <VictoryChart
          height={420}
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
                        mutation: data => {
                          console.table('item selecionado:', data);
                        },
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
