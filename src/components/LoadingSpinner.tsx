import {motion} from 'framer-motion';
import styled, {DefaultTheme} from 'styled-components';

import {Icon} from './Icon';

type SpinnerSizes = 'sm' | 'md' | 'lg';

interface LoadingSpinnerProps {
  durationSeconds?: number;
  size?: SpinnerSizes;
  color?: keyof DefaultTheme['colors'];
}

const sizeMap: {[key: string]: number} = {
  sm: 15,
  md: 25,
  lg: 40,
};

const IconContainer = styled(motion.div)<{size: SpinnerSizes}>`
  width: ${(props) => sizeMap[props.size]}px;
  height: ${(props) => sizeMap[props.size]}px;
`;

const LoadingSpinner = ({
  durationSeconds = 5,
  size = 'md',
  color = 'black',
}: LoadingSpinnerProps): JSX.Element => {
  return (
    <IconContainer
      size={size}
      initial={{rotate: 0}}
      animate={{rotate: '360deg'}}
      transition={{type: 'tween', duration: durationSeconds}}
    >
      <Icon name='logo' size={size} color={color} />
    </IconContainer>
  );
};

export {LoadingSpinner};
