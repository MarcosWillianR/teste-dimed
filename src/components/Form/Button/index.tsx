import React from 'react';

import { Container, ButtonText } from './styles';

interface ButtonProps {
  customStyle?: {};
}

const Button: React.FC<ButtonProps> = ({ customStyle, children }) => {
  return (
    <Container style={customStyle}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;
