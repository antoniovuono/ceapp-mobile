import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Modal from 'react-native-modal';

import { Container, ParksContainer, ParksList } from './styles';
import { ModalContent } from '../../../components/WelcomeModal/styles';
import Search from '../../../components/Search';
import Park from '../../../components/Park';
import { usePark } from '../../../hooks/park';
import { IParks } from '../../../interfaces';
import { useAuth } from '../../../hooks/user.authenticate';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parks, setParks] = useState<IParks[]>([]);

  const { getParks } = usePark();
  const { token } = useAuth();

  const getParksList = async () => {
    try {
      const response = await getParks(token);

      const parkWithoutLeftDate = response.filter(
        (element: { left_date: null }) => {
          return element.left_date !== null;
        },
      );

      setParks(parkWithoutLeftDate);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParksList();
  }, []);

  return (
    <Container>
      <Header />

      <Modal
        style={{ justifyContent: 'center', alignItems: 'center' }}
        isVisible={isVisible}
      >
        <ModalContent />
      </Modal>

      <Search />

      <ParksContainer>
        <ParksList
          data={parks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Park
              carPlateId={item.car_id}
              color={item.car_color}
              brand={item.car_brand}
              model={item.car_model}
              departureDdate={''}
              leftDate={''}
              parcialTime={0}
              parcialPrice={0}
              isOut={!!item.left_date}
              buttonPressed={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          )}
        />
      </ParksContainer>
    </Container>
  );
};

export default HomePage;
