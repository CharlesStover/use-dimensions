import { useEffect } from 'react';
import type { EmitterSubscription } from 'react-native';
import { Dimensions } from 'react-native';
import useForceUpdate from 'use-force-update';

export default function useChangeListener(): void {
  const forceUpdate: VoidFunction = useForceUpdate();

  useEffect((): VoidFunction => {
    const subscription: EmitterSubscription = Dimensions.addEventListener(
      'change',
      forceUpdate,
    );

    return (): void => {
      subscription.remove();
    };
  }, [forceUpdate]);
}
