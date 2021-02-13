import React, { useCallback, useMemo } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { IState } from '../../store';
import { ICartItem } from '../../store/modules/cart/types';

import { WHITE_TEXT } from '../../styles/variables';

import {
  Container,
  BackButton,
  LogoText,
  CartButton,
  CartHasContentIcon,
} from './styles';

interface HeaderProps {
  showCartButton: boolean;
}

const Header: React.FC<HeaderProps> = ({ showCartButton }) => {
  const { navigate, goBack } = useNavigation();

  const cartItems = useSelector<IState, ICartItem[]>(state => state.cart.items);

  const handleNavigateToCart = useCallback(() => navigate('CartList'), [
    navigate,
  ]);

  const cartHasContent = useMemo(() => {
    return cartItems.length > 0;
  }, [cartItems.length]);

  return (
    <Container>
      <BackButton onPress={() => goBack()}>
        <Icon name="arrow-back-outline" color={WHITE_TEXT} size={26} />
      </BackButton>

      <LogoText>YourShop</LogoText>

      {showCartButton ? (
        <CartButton onPress={handleNavigateToCart}>
          {cartHasContent && <CartHasContentIcon />}
          <Icon name="cart-outline" color={WHITE_TEXT} size={22} />
        </CartButton>
      ) : (
        <View style={{ width: 46, paddingHorizontal: 12 }} />
      )}
    </Container>
  );
};

export default Header;
