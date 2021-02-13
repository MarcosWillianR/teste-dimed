import { PriceDataResponse } from '../../../pages/ProductList/types';

export enum ActionTypes {
  addProductToCart = 'ADD_PRODUCT_TO_CART',
  removeProductFromCart = 'REMOVE_PRODUCT_FROM_CART',
  decreaseCartProduct = 'DECREASE_CART_PRODUCT',
  increaseCartProduct = 'INCREASE_CART_PRODUCT',
  calcCartTotalValue = 'CALC_CART_TOTAL_VALUE',
}

export interface IProduct {
  id: number;
  name: string;
  image: string;
  price: PriceDataResponse;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  totalAmount: number;
}
