import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import {
  MAIN_COLOR,
  defaultBoxShadow,
  BACKGROUND_CARD,
  TEXT_MAIN_COLOR,
  REGULAR_FONT,
  TAG_COLOR,
} from '../../../styles/variables';

interface CartItemValueProps {
  totalLength: string;
}

export const Container = styled(RectButton)`
  ${defaultBoxShadow()}
  background: ${BACKGROUND_CARD};
  border-radius: 10px;

  margin: 0 12px 22px 12px;
  padding: 12px;

  flex-direction: row;
  align-items: center;
`;

export const CartItemImage = styled.Image`
  border-width: 1px;
  border-color: ${MAIN_COLOR};
  border-radius: 35px;
`;

export const CartItemDescription = styled.View`
  margin-left: 6px;
`;

export const CartItemTitle = styled.Text`
  color: ${TEXT_MAIN_COLOR};
  font-family: ${REGULAR_FONT};
  font-size: 16px;
`;

export const CartSubTitleContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const CartItemValue = styled.Text<CartItemValueProps>`
  color: ${TEXT_MAIN_COLOR};
  font-family: ${REGULAR_FONT};
  font-size: 14px;

  ${({ totalLength }) => totalLength.length >= 10 && 'font-size: 12px'};
  ${({ totalLength }) => String(totalLength).length >= 12 && 'font-size: 10px'};
`;

export const TagContent = styled.View`
  margin-left: 8px;
  width: 54px;
  height: 19px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${TAG_COLOR};
  border-radius: 9.5px;
`;
export const TagValue = styled.Text`
  font-family: ${REGULAR_FONT};
  color: ${TAG_COLOR};
  font-size: 10px;
`;

export const CartChangeQuantityContent = styled.View`
  flex-direction: row;
  margin-left: auto;
  align-items: center;
`;

export const CartIncreaseButton = styled(BorderlessButton)`
  padding: 6px;
`;

export const CartCurrentQuantity = styled.Text`
  color: ${TEXT_MAIN_COLOR};
  font-family: ${REGULAR_FONT};
  font-size: 14px;
  margin: 0 2px;
`;

export const CartDecreaseButton = styled(BorderlessButton)`
  padding: 6px;
`;
