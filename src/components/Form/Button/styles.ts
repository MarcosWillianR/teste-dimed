import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import {
  MAIN_COLOR,
  REGULAR_FONT,
  WHITE_TEXT,
} from '../../../styles/variables';

export const Container = styled(RectButton)`
  height: 45px;
  flex: 1;

  align-items: center;
  justify-content: center;

  background: ${MAIN_COLOR};
`;

export const ButtonText = styled.Text`
  font-family: ${REGULAR_FONT};
  color: ${WHITE_TEXT};
  font-size: 18px;
`;
