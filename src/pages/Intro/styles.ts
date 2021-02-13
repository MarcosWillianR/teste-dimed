import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import {
  MAIN_COLOR,
  WHITE_TEXT,
  BACKGROUND_WHITE,
  BOLD_FONT,
  REGULAR_FONT,
} from '../../styles/variables';

export const Container = styled.View`
  flex: 1;
  background: ${MAIN_COLOR};
  align-items: center;
  justify-content: center;

  padding: 22px;
`;

export const Title = styled.Text`
  font-size: 42px;
  line-height: 42px;
  margin-bottom: 53.5px;
  font-family: ${BOLD_FONT};
  color: ${WHITE_TEXT};
`;

export const Button = styled(RectButton)`
  position: absolute;
  bottom: 22px;
  flex-direction: row;
  justify-content: center;
  padding: 12px;
  border-radius: 6px;

  background: ${BACKGROUND_WHITE};
  width: 100%;
`;

export const ButtonText = styled.Text`
  font-size: 22px;
  font-family: ${REGULAR_FONT};
  color: ${MAIN_COLOR};
`;
