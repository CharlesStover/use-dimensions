# useDimensions

[![version](https://img.shields.io/npm/v/use-dimensions.svg)](https://www.npmjs.com/package/use-dimensions)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/use-dimensions.svg)](https://www.npmjs.com/package/use-dimensions)
[![downloads](https://img.shields.io/npm/dt/use-dimensions.svg)](https://www.npmjs.com/package/use-dimensions)

`useDimensions` is a React hook for the React Native Dimensions API.

## Install

* `npm install use-dimensions --save`, or
* `yarn add use-dimensions`

## Use

### Screen and Window Dimensions

To get both screen and window dimensions, use the default export.

```js
import useDimensions from 'use-dimensions';

export default function MyComponent() {
  const { screen, window } = useDimensions();
  return (
    <Text>
      a {screen.width}x{screen.height} screen{' '}
      inside a{' '}
      {window.width}x{window.height} window
    </Text>
  );
}
```

### Screen Dimensions Only

To get the screen dimensions only, use the `useScreenDimensions` export.

```js
import { useScreenDimensions } from 'use-dimensions';

export default function MyComponent() {
  const { height, width } = useScreenDimensions();
  return <Text>{width}x{height}</Text>;
}
```

### Window Dimensions Only

To get the window dimensions only, use the `useWindowDimensions` export.

```js
import { useWindowDimensions } from 'use-dimensions';

export default function MyComponent() {
  const { height, width } = useWindowDimensions();
  return <Text>{width}x{height}</Text>;
}
```
