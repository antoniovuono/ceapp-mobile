import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Modal from 'react-native-modal';

import {
  ButtonContent,
  Container,
  CreateParkContent,
  CreateParkModal,
  CreateParkSubTitle,
  CreateParkTitle,
  ParksContainer,
  ParksList,
} from './styles';
import { ModalContent } from '../../../components/WelcomeModal/styles';
import Search from '../../../components/Search';
import Park from '../../../components/Park';
import { usePark } from '../../../hooks/park';
import { IParks } from '../../../interfaces';
import { useAuth } from '../../../hooks/user.authenticate';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { dateHourFormat } from '../../../utils/DateFormats';
import PrimaryButton from '../../../components/PrimaryButton';
import Input from '../../../components/Input';
import { useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  brand: Yup.string().required('Marca é obrigatória'),
  model: Yup.string().required('Modelo é obrigatório'),
  car_id: Yup.string().required('Placa é obrigatória'),
});

const HomePage: React.FC = () => {
  const [parks, setParks] = useState<IParks[]>([]);
  const [loading, setLoading] = useState(false);
  const [isParkCadasterVisible, setIsParkCadasterVisible] = useState(false);

  const { getParks } = usePark();
  const { token } = useAuth();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getParksList = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  const formattedDate = (departure_date: string) => {
    const formatted_date = dateHourFormat(departure_date);

    return formatted_date;
  };

  useEffect(() => {
    getParksList();
  }, []);

  return (
    <Container>
      <Header />

      <Modal
        style={{ justifyContent: 'center', alignItems: 'center' }}
        isVisible={false}
      >
        <ModalContent />
      </Modal>

      <Search />

      <ParksContainer>
        {loading ? (
          <ActivityIndicator
            size="large"
            color={theme.colors.PRIMARY_BACKGROUND_BLUE}
          />
        ) : (
          <ParksList
            data={parks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Park
                carPlateId={item.car_id}
                color={item.car_color}
                brand={item.car_brand}
                model={item.car_model}
                departureDdate={formattedDate(item.departure_date)}
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
        )}
      </ParksContainer>

      <CreateParkContent>
        <PrimaryButton
          isPrimary
          title="Entrada"
          onPressed={() => {
            setIsParkCadasterVisible(prevState => !prevState);
          }}
        />
      </CreateParkContent>

      <Modal
        isVisible={isParkCadasterVisible}
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onBackdropPress={() => {
          setIsParkCadasterVisible(prevState => !prevState);
        }}
      >
        <CreateParkModal>
          <CreateParkTitle>Entrada do carro</CreateParkTitle>
          <CreateParkSubTitle>
            Entre com os dados do carro que está entrando no estacionamento
          </CreateParkSubTitle>

          <Input
            placeholder="Marca do carro"
            iconName="arrow-down-circle"
            control={control}
            name="brand"
            error={errors.brand && errors.brand.message}
            autoCapitalize="none"
            keyboardType="default"
          />
          <Input
            placeholder="Modelo do carro"
            iconName="arrow-right-circle"
            control={control}
            name="model"
            error={errors.model && errors.model.message}
            autoCapitalize="none"
            keyboardType="default"
          />
          <Input
            placeholder="Placa do carro"
            iconName="credit-card"
            control={control}
            name="car_id"
            error={errors.car_id && errors.car_id.message}
            autoCapitalize="none"
            keyboardType="default"
          />

          <ButtonContent>
            <PrimaryButton isPrimary title="ENTRADA" />
          </ButtonContent>
        </CreateParkModal>
      </Modal>
    </Container>
  );
};

export default HomePage;
