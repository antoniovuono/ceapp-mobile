import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import Header from '../../../components/Header';
import Park from '../../../components/Park';
import Search from '../../../components/Search';
import { usePark } from '../../../hooks/park';
import { useAuth } from '../../../hooks/user.authenticate';
import { dateHourFormat } from '../../../utils/DateFormats';

import { Container, ParksContainer, ParksList } from './styles';

const HistoricPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { closedParks, deletePark, getParks } = usePark();
  const { token } = useAuth();
  const theme = useTheme();

  const handleDeletePressed = (park_id: string) => {
    try {
      deletePark(park_id, token);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getParks(token);
  }, []);

  const formattedDate = (departure_date: string) => {
    const formatted_date = dateHourFormat(departure_date);

    return formatted_date;
  };

  return (
    <Container>
      <Header />
      <Search />

      <ParksContainer>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={theme.colors.PRIMARY_BACKGROUND_BLUE}
          />
        ) : (
          <ParksList
            data={closedParks}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Park
                carPlateId={item.car_id}
                color={item.car_color}
                brand={item.car_brand}
                model={item.car_model}
                departureDdate={formattedDate(item.departure_date)}
                leftDate={formattedDate(item.left_date)}
                isOut={!!item.left_date}
                deletePressed={() => handleDeletePressed(item.id)}
              />
            )}
          />
        )}
      </ParksContainer>
    </Container>
  );
};

export default HistoricPage;
