// @ts-ignore
import { useEffect, useState } from 'react';

// @ts-ignore
import { Dimensions as RNDimensions } from 'react-native';

interface BothDimensions {
  screen: Dimensions;
  window: Dimensions;
}

interface Dimensions {
  height: number;
  width: number;
}

type Getter = (screen: Dimensions, window: Dimensions) => Dimensions;

type Setter = (dimensions: Dimensions) => void;

type Type = 'screen' | 'window';

type Unsubscribe = () => void;

const getDimensions = (type: Type, getDimensions: Getter): Dimensions => {
  const [ dimensions, setDimensions ]: [ Dimensions, Setter ] = useState((): Dimensions => RNDimensions.get(type));
  useEffect(
    (): Unsubscribe => {

      // Event listener for when the dimensions change.
      const handleDimensionsChange = (window: Dimensions, screen: Dimensions): void => {
        const newDimensions: Dimensions = getDimensions(window, screen);
        if (
          dimensions.height !== newDimensions.height ||
          dimensions.width !== newDimensions.width
        ) {
          setDimensions({ ...newDimensions });
        }
      };
      RNDimensions.addEventListener('change', handleDimensionsChange);

      // When the component unmounts, remove the event listener.
      return (): void => {
        RNDimensions.removeEventListener('change', handleDimensionsChange);
      };
    },
    [ RNDimensions ]
  );
  return dimensions;
};

export function useScreenDimensions(): Dimensions {
  return getDimensions('screen', (_, screen) => screen);
};

export function useWindowDimensions(): Dimensions {
  return getDimensions('window', window => window);
};

export default function useDimensions(): BothDimensions {
  const screen = useScreenDimensions();
  const window = useWindowDimensions();
  return { screen, window };
};
