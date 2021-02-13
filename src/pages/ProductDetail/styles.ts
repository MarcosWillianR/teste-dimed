import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
  BACKGROUND_CARD,
  BACKGROUND_WHITE,
  defaultBoxShadow,
  TAG_COLOR,
  WHITE_TEXT,
  REGULAR_FONT,
  MAIN_COLOR,
  TEXT_MAIN_COLOR,
} from '../../styles/variables';

const { height, width } = Dimensions.get('screen');

const defaultPriceValueStyle = css`
  font-family: ${REGULAR_FONT};
  color: ${TEXT_MAIN_COLOR};
  font-size: 14px;
  max-width: ${width - 300}px;
`;

export const Container = styled.View`
  flex: 1;
  background: ${BACKGROUND_WHITE};
`;

export const ProductDetailContent = styled.View`
  background: ${BACKGROUND_CARD};
  margin: 30px 12px;
  border-radius: 10px;
  padding: 12px;
  max-height: ${height - 110}px;
  ${defaultBoxShadow()}
`;

export const ProductDetailScrollView = styled.ScrollView``;

export const ProductImageContent = styled.View`
  justify-content: center;
  border-bottom-width: 1px;
  border-color: ${MAIN_COLOR};
  margin-bottom: 22px;
  padding-bottom: 22px;
`;

export const DiscountTagItem = styled.View`
  margin-left: 8px;
  width: 54px;
  height: 19px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${TAG_COLOR};
  background: ${TAG_COLOR};
  border-radius: 9.5px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999999;
`;

export const DiscountTagText = styled.Text`
  font-family: ${REGULAR_FONT};
  color: ${WHITE_TEXT};
  font-size: 10px;
`;

export const ProductImageHorizontalScrollView = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})``;

export const ProductImage = styled.Image`
  flex: 1;
  width: ${width - 44}px;
  height: ${height / 3}px;
`;

export const ProductName = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${TEXT_MAIN_COLOR};
  margin-bottom: 12px;
`;

export const ProductDescriptionText = styled.Text`
  color: ${TEXT_MAIN_COLOR};
  font-size: 14px;
`;

export const Separator = styled.View`
  width: 150px;
  height: 1px;
  background: ${MAIN_COLOR};

  margin: 22px 0;
`;

export const ProductValue = styled.Text`
  font-family: ${REGULAR_FONT};
  color: ${TEXT_MAIN_COLOR};
  font-size: 14px;
`;

export const ProductDiscountValuesContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: auto;
`;

export const ProductOriginalValue = styled.Text`
  ${defaultPriceValueStyle};
`;

export const ProductWithDiscountValue = styled.Text`
  ${defaultPriceValueStyle};
`;

export const FooterButtonsContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const AddCartButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${MAIN_COLOR};
  background: transparent;
  height: 45px;
  max-width: 61px;
  border-radius: 12px;
  margin-right: 12px;
  flex: 1;

  align-items: center;
  justify-content: center;
`;
