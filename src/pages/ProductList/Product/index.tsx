import React, { useMemo, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { IState } from '../../../store';

import { addProductToCart } from '../../../store/modules/cart/actions';

import priceFormatter from '../../../utils/priceFormatter';

import { MAIN_COLOR, WHITE_TEXT } from '../../../styles/variables';

import {
  Container,
  ProductImage,
  ProductItemWrapper,
  ProductName,
  ProductValue,
  CartButton,
  ProductDiscountValuesContent,
  ProductOriginalValue,
  ProductWithDiscountValue,
  TagContent,
  TagValue,
} from './styles';

import { ProductState } from '../types';

interface ProductProps {
  data: ProductState;
}

const Product: React.FC<ProductProps> = ({ data }) => {
  const { id, image, price, name } = data;
  const { originalPrice, dealPrice, percentage } = price;

  const { navigate } = useNavigation();

  const dispatch = useDispatch();
  const hasInCart = useSelector<IState, boolean>(
    state => !!state.cart.items.find(cartItem => cartItem.product.id === id),
  );

  const withoutDiscount = useMemo(() => {
    return originalPrice && !dealPrice && !percentage;
  }, [dealPrice, originalPrice, percentage]);

  const originalPriceFormatted = useMemo(() => priceFormatter(originalPrice), [
    originalPrice,
  ]);

  const dealPriceFormatted = useCallback(
    (value: number) => priceFormatter(value),
    [],
  );

  const handleAddProductToCart = useCallback(() => {
    if (hasInCart) {
      return Alert.alert(
        'Erro ao adicionar produto ao carrinho',
        'parece que esse produto ja esta no seu carrinho.',
        [
          { text: 'Ver carrinho', onPress: () => navigate('CartList') },
          { text: 'Ok' },
        ],
      );
    }

    dispatch(addProductToCart({ id, image, name, price }));
  }, [dispatch, hasInCart, id, image, name, navigate, price]);

  const handleNavigateToProductDetail = useCallback(() => {
    navigate('ProductDetail', { productId: id });
  }, [navigate, id]);

  return (
    <Container onPress={handleNavigateToProductDetail}>
      <ProductImage source={{ uri: image }} />

      <ProductItemWrapper>
        <ProductName numberOfLines={1}>{name}</ProductName>

        {withoutDiscount ? (
          <ProductValue>{originalPriceFormatted}</ProductValue>
        ) : (
          <ProductDiscountValuesContent>
            <ProductOriginalValue numberOfLines={1}>
              {`De: ${originalPriceFormatted} `}
            </ProductOriginalValue>

            {dealPrice && (
              <ProductWithDiscountValue numberOfLines={1}>
                {`Por: ${dealPriceFormatted(dealPrice)}`}
              </ProductWithDiscountValue>
            )}

            {percentage && (
              <TagContent>
                <TagValue>{`${percentage}% OFF`}</TagValue>
              </TagContent>
            )}
          </ProductDiscountValuesContent>
        )}
      </ProductItemWrapper>

      <CartButton
        isInCart={hasInCart}
        activeOpacity={0.5}
        onPress={handleAddProductToCart}
      >
        <Icon
          name="cart-outline"
          color={hasInCart ? WHITE_TEXT : MAIN_COLOR}
          size={14}
        />
      </CartButton>
    </Container>
  );
};

export default Product;
