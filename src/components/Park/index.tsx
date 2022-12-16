import React from 'react';
import { Ionicons } from '@expo/vector-icons';
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
  Divider,
  BottomLine,
  DateTimeInfos,
  DepartueContent,
  LeftContent,
} from './styles';
import { useTheme } from 'styled-components';

interface IParkProps {
  carPlateId: string;
  color: string;
  brand: string;
  model: string;
  departureDdate: string;
  leftDate: string;
  isOut: boolean;
  buttonPressed?: () => void;
  deletePressed: () => void;
}

const Park: React.FC<IParkProps> = ({
  carPlateId,
  color,
  brand,
  model,
  departureDdate,
  leftDate,
  isOut,
  buttonPressed,
  deletePressed,
}) => {
  const theme = useTheme();

  return (
    <Content isOut={isOut} activeOpacity={0.7} onLongPress={deletePressed}>
      <InformationsContent>
        <UpperLine>
          <CarDetailsContent>
            <CarPlateAndColorContent>
              <CarPlateId>{carPlateId}</CarPlateId>
              <Color>{color}</Color>
            </CarPlateAndColorContent>
            <CarBrandAndModel>
              {brand} - {model}
            </CarBrandAndModel>
          </CarDetailsContent>
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
            <DateTimeInfos>{departureDdate}</DateTimeInfos>
          </DepartueContent>

          <LeftContent>
            <DateTimeInfos bold>Saída:</DateTimeInfos>
            <Ionicons
              style={{ marginLeft: 2 }}
              name="time-outline"
              size={14}
              color={theme.colors.PRIMARY_TITLE}
            />
            <DateTimeInfos>{leftDate || '--/--/--'}</DateTimeInfos>
          </LeftContent>
        </BottomLine>
      </InformationsContent>

      {!leftDate ? (
        <ButtonContent onPress={buttonPressed}>
          <Ionicons
            name="ios-exit-outline"
            size={24}
            color={theme.colors.PRIMARY_WARNING_RED}
          />
        </ButtonContent>
      ) : null}
    </Content>
  );
};

export default Park;
