import {useMediaQuery as useMQ} from 'react-responsive';

interface UseMediaQuery {
  isXLargeSize: boolean;
  isLargeSize: boolean;
  isMediumSize: boolean;
  isSmallSize: boolean;
}

const useMediaQuery = (): UseMediaQuery => {
  const isXLargeSize = useMQ({
    query: '(max-width: 1440px)',
  });
  const isLargeSize = useMQ({
    query: '(max-width: 950px)',
  });
  const isMediumSize = useMQ({
    query: '(max-width: 768px)',
  });
  const isSmallSize = useMQ({
    query: '(max-width: 568px)',
  });

  return {isXLargeSize, isLargeSize, isMediumSize, isSmallSize};
};

export {useMediaQuery};
