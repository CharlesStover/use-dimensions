import type { ScaledSize } from 'react-native';
import  { useWindowDimensions } from 'react-native';
import useScreenDimensions from './use-screen-dimensions';

export default function useDimensions(): Record<'screen' | 'window', ScaledSize> {
  return {
    screen: useScreenDimensions(),
    window: useWindowDimensions(),
  };
};
