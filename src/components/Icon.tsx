import styled, {DefaultTheme} from 'styled-components';
import {space} from 'styled-system';
import {iconMap} from '@assets/build';

import {Box} from './Box';
import {Flex} from './Flex';

import {theme} from '@styles';

const sizeMap = {...theme.iconSizeMap};

export type IconList = keyof typeof iconMap;

export type IconSizes = keyof typeof sizeMap;
interface IconProps {
  name: IconList;
  size?: IconSizes | number;
  color?: keyof DefaultTheme['colors'];
  fitWidth?: boolean;
}

const IconWrapper = styled(Flex)<{hovered: boolean}>`
  opacity: ${(props) => (props.hovered ? '0.7' : '1')};
`;

const StyledIconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  ${space}
`;

const Icon: React.FC<IconProps> = ({name, size = 'lg', color, fitWidth}) => {
  const iconColor = theme.colors[color || 'black'];
  const IconComp = iconMap[name];

  const sizeNumber = (sizeMap[size] || size) as number;

  return (
    <StyledIconWrapper width={sizeNumber} height={fitWidth ? 'auto' : sizeNumber}>
      <IconComp
        color={iconColor}
        width={sizeNumber * 5}
        height={fitWidth ? 'auto' : sizeNumber * 5}
      />
    </StyledIconWrapper>
  );
};

export {Icon, IconWrapper};
