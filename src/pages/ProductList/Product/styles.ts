import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import {
  defaultBoxShadow,
  BACKGROUND_CARD,
  TAG_COLOR,
  REGULAR_FONT,
  TEXT_MAIN_COLOR,
  MAIN_COLOR,
} from '../../../styles/variables';

const { width } = Dimensions.get('screen');

interface CartButtonProps {
  isInCart: boolean;
}

const priceStyle = css`
  font-family: ${REGULAR_FONT};
  color: ${TEXT_MAIN_COLOR};
  font-size: 12px;
  max-width: ${width - 300}px;
`;

export const Container = styled(RectButton)`
  ${defaultBoxShadow()};

  margin-bottom: 22px;

  border-radius: 10px;

  flex-direction: row;
  background: ${BACKGROUND_CARD};
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const ProductItemWrapper = styled.View`
  flex: 1;
  margin: 12px;
`;

export const ProductName = styled.Text`
  margin-right: 32px;
  font-family: ${REGULAR_FONT};
  color: ${TEXT_MAIN_COLOR};
  font-size: 16px;
`;

export const ProductValue = styled.Text`
  margin-top: auto;
  font-family: ${REGULAR_FONT};
  color: ${TEXT_MAIN_COLOR};
  font-size: 14px;
`;

export const CartButton = styled(BorderlessButton)<CartButtonProps>`
  position: absolute;
  right: 8px;
  top: 8px;

  border-radius: 26px;
  width: 24px;
  height: 24px;

  align-items: center;
  justify-content: center;

  ${({ isInCart }) => isInCart && `background: ${MAIN_COLOR}`};
`;

export const ProductDiscountValuesContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: auto;
`;

export const ProductOriginalValue = styled.Text`
  ${priceStyle}
`;
export const ProductWithDiscountValue = styled.Text`
  ${priceStyle}
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
