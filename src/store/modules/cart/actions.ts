import { IProduct, ActionTypes } from './types';

export function addProductToCart(product: IProduct) {
  return {
    type: ActionTypes.addProductToCart,
    payload: { product },
  };
}

export function decreaseCartProduct(productId: number) {
  return {
    type: ActionTypes.decreaseCartProduct,
    payload: { productId },
  };
}

export function increaseCartProduct(productId: number) {
  return {
    type: ActionTypes.increaseCartProduct,
    payload: { productId },
  };
}

export function removeProductFromCart(productId: number) {
  return {
    type: ActionTypes.removeProductFromCart,
    payload: { productId },
  };
}

export function calcCartTotalValue() {
  return {
    type: ActionTypes.calcCartTotalValue,
  };
}
