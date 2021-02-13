import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { MAIN_COLOR } from '../../styles/variables';

import { Container, Title, Button, ButtonText } from './styles';

const Intro: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToProducts = useCallback(() => navigate('ProductList'), [
    navigate,
  ]);

  return (
    <Container>
      <Title>YourShop</Title>

      <Button onPress={handleNavigateToProducts}>
        <ButtonText>Entrar</ButtonText>

        <Icon
          name="chevron-forward-outline"
          color={MAIN_COLOR}
          style={{ position: 'absolute', right: 12, top: 13 }}
          size={26}
        />
      </Button>
    </Container>
  );
};

export default Intro;
