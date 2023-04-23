import {ReactNode} from 'react';
import styled from 'styled-components';
import {
  FlexboxProps,
  LayoutProps,
  PaddingProps,
  MarginProps,
  ColorProps,
  BackgroundProps,
  layout,
  color,
  flexbox,
  margin,
  background,
  padding,
} from 'styled-system';

export interface FlexProps
  extends FlexboxProps,
    MarginProps,
    ColorProps,
    LayoutProps,
    PaddingProps,
    BackgroundProps,
    MarginProps {
  children?: ReactNode;
}

const Flex = styled.div<FlexProps>`
  display: flex;
  ${layout}
  ${margin}
  ${flexbox}
  ${padding}
  ${color}
  ${background}
`;

export {Flex};
