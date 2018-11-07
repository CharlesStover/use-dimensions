# use-dimensions

A React hook for the React Native Dimensions API.

[![package](https://img.shields.io/github/package-json/v/CharlesStover/use-dimensions.svg)](https://github.com/CharlesStover/use-dimensions/)
[![build](https://travis-ci.com/CharlesStover/use-dimensions.svg)](https://travis-ci.com/CharlesStover/use-dimensions/)
[![downloads](https://img.shields.io/npm/dt/use-dimensions.svg)](https://www.npmjs.com/package/use-dimensions)
[![minified size](https://img.shields.io/bundlephobia/min/use-dimensions.svg)](https://www.npmjs.com/package/use-dimensions)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/use-dimensions.svg)](https://www.npmjs.com/package/use-dimensions)

## Install

* `npm install use-dimensions --save`, or
* `yarn add use-dimensions`

## Use

### Screen and Window Dimensions

To get both screen and window dimensions, use the default export.

```JavaScript
import useDimensions from 'use-dimensions';

const MyComponent = () => {
  const { screen, window } = useDimensions();
  return <Text>{screen.width}x{screen.height} inside {window.width}x{window.height}</Text>;
}
```

### Screen Dimensions Only

To get the screen dimensions only, use the `useScreenDimensions` export.

```JavaScript
import { useScreenDimensions } from 'use-dimensions';

const MyComponent = () => {
  const { height, width } = useScreenDimensions();
  return <Text>{width}x{height}</Text>;
}
```

### Window Dimensions Only

To get the window dimensions only, use the `useWindowDimensions` export.

```JavaScript
import { useWindowDimensions } from 'use-dimensions';

const MyComponent = () => {
  const { height, width } = useWindowDimensions();
  return <Text>{width}x{height}</Text>;
}
```
