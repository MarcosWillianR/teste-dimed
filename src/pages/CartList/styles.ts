import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';
import { ICartItem } from '../../store/modules/cart/types';

import {
  BACKGROUND_WHITE,
  MAIN_COLOR,
  TEXT_MAIN_COLOR,
  REGULAR_FONT,
} from '../../styles/variables';

interface TotalValueProps {
  totalLength: number;
}

const textStyle = css`
  font-family: ${REGULAR_FONT};
  color: ${TEXT_MAIN_COLOR};
`;

export const Container = styled.View`
  flex: 1;
  background: ${BACKGROUND_WHITE};
`;

export const CartFlatList = styled(FlatList as new () => FlatList<ICartItem>)``;

export const FinishCartContent = styled.View`
  background: ${BACKGROUND_WHITE};
  padding: 12px;
  flex: 1;
  min-height: 69px;
  max-height: 69px;
`;

export const TotalContent = styled.View`
  border-top-width: 1px;
  border-color: ${MAIN_COLOR};

  margin: 0 12px;
  padding-top: 12px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalText = styled.Text`
  ${textStyle};
  font-size: 18px;
`;

export const TotalValue = styled.Text<TotalValueProps>`
  ${textStyle};
  font-size: 22px;

  ${({ totalLength }) => String(totalLength).length >= 4 && 'font-size: 18px'};
  ${({ totalLength }) => String(totalLength).length >= 6 && 'font-size: 16px'};
`;
