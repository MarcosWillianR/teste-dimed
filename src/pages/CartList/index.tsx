import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../store';
import { ICartState } from '../../store/modules/cart/types';
import { calcCartTotalValue } from '../../store/modules/cart/actions';

import Header from '../../components/Header';
import { Button } from '../../components/Form';

import CartItem from './CartItem';

import priceFormatter from '../../utils/priceFormatter';

import {
  Container,
  CartFlatList,
  FinishCartContent,
  TotalContent,
  TotalText,
  TotalValue,
} from './styles';

const CartList: React.FC = () => {
  const dispatch = useDispatch();

  const { items: cartItems, totalAmount } = useSelector<IState, ICartState>(
    state => state.cart,
  );

  const cartTotalFormatted = useMemo(() => {
    return priceFormatter(totalAmount);
  }, [totalAmount]);

  useEffect(() => {
    dispatch(calcCartTotalValue());
  }, [dispatch, cartItems]);

  return (
    <Container>
      <Header showCartButton={false} />

      <CartFlatList
        data={cartItems}
        initialNumToRender={cartItems.length}
        keyboardShouldPersistTaps="handled"
        keyExtractor={cartItem => String(cartItem.product.id)}
        renderItem={({ item }) => <CartItem data={item} />}
        contentContainerStyle={{
          marginHorizontal: 12,
          marginTop: 30,
          paddingBottom: 34,
        }}
        ListFooterComponent={() => (
          <TotalContent>
            <TotalText>Total</TotalText>

            <TotalValue totalLength={totalAmount}>
              {cartTotalFormatted}
            </TotalValue>
          </TotalContent>
        )}
      />

      <FinishCartContent>
        <Button>Escolher método de pagamento</Button>
      </FinishCartContent>
    </Container>
  );
};

export default CartList;
