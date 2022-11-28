import {useEffect} from 'react';
import { Dimensions } from "react-native";
import useForceUpdate from 'use-force-update';

export default function useChangeListener(): void {
  const forceUpdate: VoidFunction = useForceUpdate();

  useEffect(
    (): VoidFunction => {
      const { remove } = Dimensions.addEventListener('change', forceUpdate);
      return (): void => {
        remove();
      };
    },
    [forceUpdate]
  );
};
