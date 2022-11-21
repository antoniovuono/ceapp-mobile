import React from 'react';

import { Container, Title, SubTitle, Description } from './styles';

interface ICommunication {
  title: string;
  subtitle: string;
  description: string;
}

const SlogamBox: React.FC<ICommunication> = ({
  title,
  subtitle,
  description,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Description>{description}</Description>
    </Container>
  );
};

export default SlogamBox;
