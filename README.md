# use-dimensions [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=React%20Native's%20Dimensions%20API%20is%20now%20accessible%20with%20Hooks!&url=https://github.com/CharlesStover/use-dimensions&via=CharlesStover&hashtags=react,reactjs,reactnative,javascript,typescript,webdev,webdevelopment)

A React hook for the React Native Dimensions API.

[![version](https://img.shields.io/npm/v/use-dimensions.svg)](https://www.npmjs.com/package/use-dimensions/)
[![minified size](https://img.shields.io/bundlephobia/min/use-dimensions.svg)](https://www.npmjs.com/package/use-dimensions)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/use-dimensions.svg)](https://www.npmjs.com/package/use-dimensions)
[![downloads](https://img.shields.io/npm/dt/use-dimensions.svg)](https://www.npmjs.com/package/use-dimensions)
[![build](https://travis-ci.com/CharlesStover/use-dimensions.svg)](https://travis-ci.com/CharlesStover/use-dimensions/)

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
