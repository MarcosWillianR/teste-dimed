import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
  BACKGROUND_CARD,
  REGULAR_FONT,
  TEXT_MAIN_COLOR,
  defaultBoxShadow,
} from '../../styles/variables';

export const Container = styled.View`
  background: ${BACKGROUND_CARD};

  height: 45px;
  border-radius: 18.5px;
  margin: 0 12px;
  padding-right: 12px;

  ${defaultBoxShadow(6)}

  top: -22.5px;

  flex-direction: row;
  align-items: center;
`;

export const SearchButton = styled(BorderlessButton)`
  padding: 12px 6px 12px 12px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 18px;
  font-family: ${REGULAR_FONT};
  color: ${TEXT_MAIN_COLOR};
`;
