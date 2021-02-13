import { Reducer } from 'redux';
import produce from 'immer';
import { Alert } from 'react-native';

import { ICartState, ActionTypes, IProduct } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  totalAmount: 0,
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addProductToCart: {
        const { id, price, name, image } = action.payload.product as IProduct;

        const productAlreadyInCart = draft.items.find(
          ({ product: { id: cartItemId } }) => cartItemId === id,
        );

        if (!productAlreadyInCart) {
          draft.items.push({
            product: { id, image, name, price },
            quantity: 1,
          });

          Alert.alert('Produto adicionado com sucesso!');
        }

        return draft;
      }
      case ActionTypes.decreaseCartProduct: {
        const productId = action.payload.productId as number;

        draft.items = draft.items.map(({ product, quantity }) => {
          if (product.id === productId) {
            return { product, quantity: quantity - 1 };
          }

          return { product, quantity };
        });

        return draft;
      }
      case ActionTypes.increaseCartProduct: {
        const productId = action.payload.productId as number;

        draft.items = draft.items.map(({ product, quantity }) => {
          if (product.id === productId) {
            return { product, quantity: quantity + 1 };
          }

          return { product, quantity };
        });

        return draft;
      }
      case ActionTypes.removeProductFromCart: {
        const productId = action.payload.productId as number;

        draft.items = draft.items.filter(
          ({ product: { id: cartProductId } }) => cartProductId !== productId,
        );

        return draft;
      }
      case ActionTypes.calcCartTotalValue: {
        const totalValue = draft.items.reduce((acc, { product, quantity }) => {
          const { price } = product;
          const { originalPrice, dealPrice } = price;

          acc += (dealPrice || originalPrice) * quantity;

          return acc;
        }, 0);

        draft.totalAmount = totalValue;

        return draft;
      }
      default: {
        return draft;
      }
    }
  });
};

export default cart;
