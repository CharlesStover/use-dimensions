import type { ScaledSize } from 'react-native';
import { Dimensions } from 'react-native';
import useChangeListener from './use-change-listener';

export default function useScreenDimensions(): ScaledSize {
  useChangeListener();
  return Dimensions.get('screen');
}
