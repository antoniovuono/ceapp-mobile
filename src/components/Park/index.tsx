import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {
  Content,
  InformationsContent,
  ButtonContent,
  UpperLine,
  CarPlateAndColorContent,
  CarPlateId,
  Color,
  CarBrandAndModel,
  CarDetailsContent,
  ParkingDetails,
  PartialInfos,
  Divider,
  BottomLine,
  DateTimeInfos,
  DepartueContent,
  LeftContent,
} from './styles';
import { useTheme } from 'styled-components';

const Park: React.FC = () => {
  const theme = useTheme();

  return (
    <Content isOut={false}>
      <InformationsContent>
        <UpperLine>
          <CarDetailsContent>
            <CarPlateAndColorContent>
              <CarPlateId>MIO-5594</CarPlateId>
              <Color>Preto</Color>
            </CarPlateAndColorContent>
            <CarBrandAndModel>Subaru - Imprenza</CarBrandAndModel>
          </CarDetailsContent>

          <ParkingDetails>
            <PartialInfos bold>Parcial:</PartialInfos>
            <Ionicons
              style={{ marginLeft: 2 }}
              name="time-outline"
              size={14}
              color={theme.colors.PRIMARY_TITLE}
            />
            <PartialInfos>1h</PartialInfos>

            <MaterialIcons
              name="attach-money"
              size={14}
              color={theme.colors.PRIMARY_TITLE}
            />
            <PartialInfos>10,00</PartialInfos>
          </ParkingDetails>
        </UpperLine>

        <Divider />

        <BottomLine>
          <DepartueContent>
            <DateTimeInfos bold>Entrada:</DateTimeInfos>
            <Ionicons
              style={{ marginLeft: 2 }}
              name="time-outline"
              size={14}
              color={theme.colors.PRIMARY_TITLE}
            />
            <DateTimeInfos>16/10/2022 - 10:00</DateTimeInfos>
          </DepartueContent>

          <LeftContent>
            <DateTimeInfos bold>Saída:</DateTimeInfos>
            <Ionicons
              style={{ marginLeft: 2 }}
              name="time-outline"
              size={14}
              color={theme.colors.PRIMARY_TITLE}
            />
            <DateTimeInfos>16/10/2022 - 10:00</DateTimeInfos>
          </LeftContent>
        </BottomLine>
      </InformationsContent>

      <ButtonContent>
        <Ionicons
          name="ios-exit-outline"
          size={24}
          color={theme.colors.PRIMARY_WARNING_RED}
        />
      </ButtonContent>
    </Content>
  );
};

export default Park;
