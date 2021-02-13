const MAIN_COLOR = '#6874E8';
const WHITE_TEXT = '#FFFFFF';
const TEXT_MAIN_COLOR = '#2D2A32';
const BACKGROUND_CARD = '#F4F4F4';
const BACKGROUND_WHITE = '#FFFFFF';
const TAG_COLOR = '#E5446D';
const PLACEHOLDER_COLOR = '#6F6B75';

const REGULAR_FONT = 'Roboto-Regular';
const BOLD_FONT = 'Roboto-Bold';

const defaultBoxShadow = (customElevation = 4) => `
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  elevation: ${customElevation};
`;

export {
  MAIN_COLOR,
  WHITE_TEXT,
  TEXT_MAIN_COLOR,
  BACKGROUND_CARD,
  BACKGROUND_WHITE,
  TAG_COLOR,
  PLACEHOLDER_COLOR,
  REGULAR_FONT,
  BOLD_FONT,
  defaultBoxShadow,
};
