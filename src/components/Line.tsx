import styled, {DefaultTheme} from 'styled-components';
import {position, PositionProps, margin, MarginProps} from 'styled-system';

import {Flex} from './Flex';

type LineSizes = 'xsm' | 'sm' | 'md' | 'lg';

export const sizeMap: {[key: string]: number} = {
  sm: 2,
  md: 3,
  lg: 5,
};

interface LineProps extends PositionProps, MarginProps {
  size?: LineSizes;
  vertical?: boolean;
  colorOverride?: keyof DefaultTheme['colors'];
}

const Line = styled(Flex)<LineProps>`
  position: relative;
  ${position}
  align-self: stretch;
  width: ${(props) => (!props.vertical ? 'auto' : `${sizeMap[props.size || 'md']}px`)};
  height: ${(props) => (props.vertical ? '100%' : `${sizeMap[props.size || 'md']}px`)};
  ${margin}
  border-radius: ${(props) => `${sizeMap[props.size || 'md']}px`};
  background-color: ${(props) =>
    props.colorOverride ? props.theme.colors[props.colorOverride] : props.theme.colors.gray};
`;

export {Line};
