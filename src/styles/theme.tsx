import {ThemeProvider as TP} from 'styled-components';

/**
 * using a weight (*5) as a relative measuring unit
   (e.g: instead of setting a margin of 10px, set it to 2 (= 2*5 = 10px))
   * it only applies for values in range [0, 200] (0, 5, 10, 15, ..., 995, 1000) inclusive
   * for values outside of this range, it will use exact values (e.g: 201 will be 201px)
*/
const units = Array(201)
  .fill(0)
  .map((_, i) => i * 5);

const space = {
  ...units,
};

const sizes = {
  contentMaxWidth: 1200,
  navSubMenuHeight: 523,
  buttonHeightSmall: 35,
  buttonHeightMedium: 44,
  buttonHeightLarge: 50,
  CardWidth: 295,
  CardHeight: 450,
};

type Sizes = {[key: string]: number} & typeof sizes;

const mergedSizes: Sizes = {
  ...(units as unknown as {[key: string]: number}),
  ...sizes,
};

const sizeMap: {[key: string]: number} = {
  sm: 2,
  md: 3,
  mdLg: 4,
  lg: 5,
  xlg: 7,
  xxlg: 8,
  xxxlg: 12,
  xxxxlg: 16,
};

const borders = {
  natural: '1px solid #6366f1',
};

const radii = {
  sm: 5,
  md: 8,
  lg: 12,
  xlg: 20,
};

const zIndex = {
  actionSheet: 10,
  modal: 20,
  modalTop: 25,
  toast: 40,
};

const input = {
  horizontalPadding: 12,
  verticalPadding: 10,
};

const button = {
  buttonLiftHeight: 5,
  iconMargin: 4,
  buttonPaddingTertiary: 0,
  buttonPaddingSmall: 15,
  buttonPaddingMedium: 20,
  buttonPaddingLarge: 20,
};

const colors = {
  clear: 'rgba(0, 0, 0, 0)',
  white: '#ffffff',
  lightGray: '#f7f7f7',
  gray: '#e7e7ea',
  grayBlue: '#c1c3ff',
  heavyGray: '#b3b3b3',
  darkGray: '#717681',
  black: '#1e1e1e',
  red: '#ed3252',
  heavyRed: '#d32f2f',
  blue: '#6366f1',
  heavyBlue: '#5558e1',
  darkBlue: '#4a4dd6',
  linearBlue: 'linear-gradient(180deg, #6366f1 0%, #6366f1 0.01%, #11136f 100%)',
  linearBlue2:
    'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),' +
    'linear-gradient(180deg, #6366f1 0%, #6366f1 0.01%, #11136f 100%);',
  linearBlue3: 'linear-gradient(269deg, #5255CC 1.98%, #6366F1 40.19%, #202396 103.86%)',
};

const commonTextStyle = {
  fontFamily: 'Inter',
};

const textStyles = {
  h1: {
    ...commonTextStyle,
    fontWeight: '600',
    fontSize: '32px',
    lineHeight: '39px',
  },
  h2: {
    ...commonTextStyle,
    fontWeight: '600',
    fontSize: '22px',
    lineHeight: '27px',
  },
  h3: {
    ...commonTextStyle,
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px',
  },
  h4: {
    ...commonTextStyle,
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '22px',
  },
  bodyRegular: {
    ...commonTextStyle,
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '20px',
  },
  bodyMedium: {
    ...commonTextStyle,
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
  },
  bodyBold: {
    ...commonTextStyle,
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '20px',
  },
  smallRegular: {
    ...commonTextStyle,
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '18px',
  },
  smallMedium: {
    ...commonTextStyle,
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '18px',
  },
  smallBold: {
    ...commonTextStyle,
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '18px',
  },
  meta: {
    ...commonTextStyle,
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '16px',
  },
  metaSmall: {
    ...commonTextStyle,
    fontWeight: '400',
    fontSize: '10px',
    lineHeight: '14px',
  },
};

const shadows = {
  light: '0px 0px 20px 5px rgba(0,0,0,0.5)',
  heavy: '0px 10px 15px 5px rgba(0, 0, 0, 0.05)',
};

const theme = {
  textStyles,
  space,
  sizes: mergedSizes,
  iconSizeMap: sizeMap,
  colors,
  input,
  radii,
  borders,
  button,
  zIndex,
  shadows,
};

const ThemeProvider = (props: Omit<React.ComponentProps<typeof TP>, 'theme'>): JSX.Element => (
  <TP theme={theme}>{props.children}</TP>
);

export {theme, ThemeProvider};
