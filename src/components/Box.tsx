import styled, {DefaultTheme} from 'styled-components';
import {
  LayoutProps,
  SpaceProps,
  BorderProps,
  FlexboxProps,
  MarginProps,
  BackgroundProps,
  ColorProps,
  PaddingProps,
  BorderColorProps,
  PositionProps,
  BoxShadowProps,
  layout,
  space,
  flexbox,
  border,
  background,
  color,
  margin,
  padding,
  position,
  borderColor,
  boxShadow,
} from 'styled-system';

export interface MouseProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
}

export interface BoxProps
  extends MarginProps,
    LayoutProps,
    ColorProps,
    BackgroundProps,
    BorderColorProps,
    PaddingProps,
    BorderProps,
    FlexboxProps,
    PositionProps,
    SpaceProps,
    BoxShadowProps,
    MouseProps {
  children?: React.ReactNode;
  backgroundColor?: keyof DefaultTheme['colors'] | string;
}

const Box = styled.div<BoxProps>`
  ${layout}
  ${margin}
  ${color}
  ${padding}
  ${background}
  ${border}
  ${borderColor}
  ${flexbox}
  ${position}
  ${space}
  ${boxShadow}
`;

export {Box};
