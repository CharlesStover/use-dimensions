import { ScaledSize, Dimensions } from "react-native";
import useChangeListener from "./use-change-listener";

export default function useScreenDimensions(): ScaledSize {
  useChangeListener();
  return Dimensions.get('screen');
};
