import React, { useMemo, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import priceFormatter from '../../../utils/priceFormatter';

import { ICartItem } from '../../../store/modules/cart/types';
import {
  decreaseCartProduct,
  increaseCartProduct,
  removeProductFromCart,
} from '../../../store/modules/cart/actions';

import { MAIN_COLOR } from '../../../styles/variables';

import {
  Container,
  CartItemImage,
  CartItemDescription,
  CartItemTitle,
  CartSubTitleContent,
  CartItemValue,
  TagContent,
  TagValue,
  CartChangeQuantityContent,
  CartIncreaseButton,
  CartCurrentQuantity,
  CartDecreaseButton,
} from './styles';

interface CartItemProps {
  data: ICartItem;
}

enum CartUpdateQuantityType {
  decreaseQuantity = 0,
  increaseQuantity = 1,
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const { product, quantity } = data;
  const { id, image, price, name } = product;
  const { originalPrice, dealPrice, percentage } = price;

  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const subTotalItem = useMemo(() => {
    const valueToFormat = (dealPrice || originalPrice) * quantity;

    return priceFormatter(valueToFormat);
  }, [dealPrice, originalPrice, quantity]);

  const handleUpdateCartItemQuantity = useCallback(
    (updateType: CartUpdateQuantityType) => {
      if (updateType === 0) {
        if (quantity === 1) {
          return Alert.alert(
            'Aviso!',
            'deseja remover o produto do carrinho?',
            [
              {
                text: 'Sim',
                onPress: () => dispatch(removeProductFromCart(id)),
              },
              { text: 'Nao' },
            ],
          );
        }

        return dispatch(decreaseCartProduct(id));
      }

      return dispatch(increaseCartProduct(id));
    },
    [dispatch, id, quantity],
  );

  const handleNavigateToProductDetail = useCallback(() => {
    navigate('ProductDetail', { productId: id });
  }, [navigate, id]);

  return (
    <Container onPress={handleNavigateToProductDetail}>
      <CartItemImage
        source={{ uri: image, width: 45, height: 45 }}
        borderRadius={45}
      />

      <CartItemDescription>
        <CartItemTitle>{name}</CartItemTitle>

        <CartSubTitleContent>
          <CartItemValue totalLength={subTotalItem}>
            {subTotalItem}
          </CartItemValue>

          {percentage && (
            <TagContent>
              <TagValue>{`${percentage}% OFF`}</TagValue>
            </TagContent>
          )}
        </CartSubTitleContent>
      </CartItemDescription>

      <CartChangeQuantityContent>
        <CartIncreaseButton onPress={() => handleUpdateCartItemQuantity(0)}>
          <Icon name="remove-circle-outline" size={22} color={MAIN_COLOR} />
        </CartIncreaseButton>

        <CartCurrentQuantity>{quantity}</CartCurrentQuantity>

        <CartDecreaseButton onPress={() => handleUpdateCartItemQuantity(1)}>
          <Icon name="add-circle-outline" size={22} color={MAIN_COLOR} />
        </CartDecreaseButton>
      </CartChangeQuantityContent>
    </Container>
  );
};

export default CartItem;
