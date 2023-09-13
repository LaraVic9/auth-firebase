import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title, FilterProps } from './styles';

type Props = FilterProps & TouchableOpacityProps & {
  title: string;
  backgroundColor?: string;
}

export function Filter({ title, backgroundColor, ...rest }: Props) {
  return (
    <Container style={{backgroundColor}} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}

