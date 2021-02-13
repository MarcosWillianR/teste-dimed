import { BorderlessButton } from 'react-native-gesture-handler';
import styled, { css } from 'styled-components/native';

import {
  MAIN_COLOR,
  BOLD_FONT,
  WHITE_TEXT,
  TAG_COLOR,
} from '../../styles/variables';

const headerButtonStyle = css`
  height: 50px;
  padding: 0 12px;
  justify-content: center;
`;

export const Container = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${MAIN_COLOR};
`;

export const BackButton = styled(BorderlessButton)`
  ${headerButtonStyle}
`;

export const LogoText = styled.Text`
  font-family: ${BOLD_FONT};
  color: ${WHITE_TEXT};
  font-size: 22px;
  margin: 0 12px;
`;

export const CartButton = styled(BorderlessButton)`
  ${headerButtonStyle}
`;

export const CartHasContentIcon = styled.View`
  margin-left: auto;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background: ${TAG_COLOR};
`;
