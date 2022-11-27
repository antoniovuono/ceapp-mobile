import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Modal from 'react-native-modal';

import { Container, ParksContainer } from './styles';
import { ModalContent } from '../../../components/WelcomeModal/styles';
import Search from '../../../components/Search';
import Park from '../../../components/Park';
import { usePark } from '../../../hooks/park';
import { IParks } from '../../../interfaces';
import { useAuth } from '../../../hooks/user.authenticate';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [parks, setParks] = useState<IParks>({} as IParks);

  console.log(parks);

  const { getParks } = usePark();
  const { token } = useAuth();

  const getParksList = async () => {
    try {
      const response = await getParks(token);
      setParks(response);
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
        <Park />
      </ParksContainer>
    </Container>
  );
};

export default HomePage;
