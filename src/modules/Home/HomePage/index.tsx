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
import { WelcomeModalContent } from '../../../components/WelcomeModal/styles';
import Search from '../../../components/Search';
import Park from '../../../components/Park';
import { usePark } from '../../../hooks/park';
import { useAuth } from '../../../hooks/user.authenticate';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { dateHourFormat } from '../../../utils/DateFormats';
import PrimaryButton from '../../../components/PrimaryButton';
import Input from '../../../components/Input';
import { FieldValues, useForm } from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = Yup.object().shape({
  car_id: Yup.string().required('Placa é obrigatória'),
  car_brand: Yup.string().required('Marca é obrigatória'),
  car_model: Yup.string().required('Modelo é obrigatório'),
  car_color: Yup.string().required('Cor é obrigatória'),
});

const HomePage: React.FC = () => {
  const [addParkLoading, setAddParkLoading] = useState(false);
  const [isParkCadasterVisible, setIsParkCadasterVisible] = useState(false);
  const [carId, setCarId] = useState('');
  const [loadingParkList, setLoadingParkList] = useState(false);

  const { getParks, createParks, openParks, deletePark, exitCar } = usePark();
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

  const formattedDate = (departure_date: string) => {
    const formatted_date = dateHourFormat(departure_date);

    return formatted_date;
  };

  const handleAddNewPark = async (form: FieldValues) => {
    const { car_id, car_model, car_brand, car_color } = form;

    setAddParkLoading(true);
    try {
      await createParks(car_id, car_brand, car_model, car_color, token);
      reset();
      setIsParkCadasterVisible(false);
    } catch (err) {
      console.log(err);
    } finally {
      setAddParkLoading(false);
    }
  };

  const handleDeletePressed = (park_id: string) => {
    try {
      deletePark(park_id, token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleExitCart = (park_id: string) => {
    try {
      exitCar(park_id, token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParks(token);
  }, [openParks]);

  return (
    <Container>
      <Header />

      <Modal
        style={{ justifyContent: 'center', alignItems: 'center' }}
        isVisible={false}
      >
        <WelcomeModalContent />
      </Modal>

      <ParksContainer>
        {loadingParkList ? (
          <ActivityIndicator
            size="large"
            color={theme.colors.PRIMARY_BACKGROUND_BLUE}
          />
        ) : (
          <ParksList
            data={openParks}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Park
                carPlateId={item.car_id}
                color={item.car_color}
                brand={item.car_brand}
                model={item.car_model}
                departureDdate={formattedDate(item.departure_date)}
                leftDate={''}
                isOut={!!item.left_date}
                buttonPressed={() => handleExitCart(item.id)}
                deletePressed={() => handleDeletePressed(item.id)}
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
            name="car_brand"
            error={errors.car_brand && errors.car_brand.message}
            autoCapitalize="none"
            keyboardType="default"
          />
          <Input
            placeholder="Modelo do carro"
            iconName="arrow-right-circle"
            control={control}
            name="car_model"
            error={errors.car_model && errors.car_model.message}
            autoCapitalize="none"
            keyboardType="default"
          />
          <Input
            placeholder="Cor do carro"
            iconName="cloud"
            control={control}
            name="car_color"
            error={errors.car_color && errors.car_color.message}
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
            <PrimaryButton
              isPrimary
              title="ENTRADA"
              isLoading={addParkLoading}
              onPressed={handleSubmit(handleAddNewPark)}
            />
          </ButtonContent>
        </CreateParkModal>
      </Modal>
    </Container>
  );
};

export default HomePage;
