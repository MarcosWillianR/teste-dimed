import { BorderlessButton } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

import {
  BACKGROUND_WHITE,
  BOLD_FONT,
  WHITE_TEXT,
  MAIN_COLOR,
  TAG_COLOR,
} from '../../styles/variables';

import { ProductState } from './types';

export const Container = styled.View`
  background: ${BACKGROUND_WHITE};
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
`;

export const TitleContent = styled.View`
  background: ${MAIN_COLOR};
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0 22px 0;
`;

export const Title = styled.Text`
  font-family: ${BOLD_FONT};
  color: ${WHITE_TEXT};
  font-size: 24px;
  line-height: 24px;
  margin: 0 12px;
`;

export const CartButton = styled(BorderlessButton)`
  height: 50px;
  padding: 0 12px;
  align-items: center;
  justify-content: center;
`;

export const CartHasContentIcon = styled.View`
  margin-left: auto;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background: ${TAG_COLOR};
`;

export const ProductFlatList = styled(
  FlatList as new () => FlatList<ProductState>,
)``;
