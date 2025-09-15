# Merlo UI

I'm just trying to replicate the design and some functionality of [MerloUI v2](https://github.com/heroui-inc/heroui) for React Native.

Here is a list of some of the components that have already been implemented:

- [x] Button
- [x] Checkbox
- [x] Chip
- [x] Input
- [x] Progress
- [x] CircularProgress
- [x] Radio
- [x] Slider
- [x] Spinner
- [x] Switch

[Preview](#preview)

Since I created the library for my own needs, I did not create any documentation, so feel free to ask any questions in [issues](https://github.com/Malberee/merlo-ui/issues).

## Installation

Follow the [instructions](https://www.nativewind.dev/docs/getting-started/installation) for installing NativeWind v4

#### Install merlo-ui

```sh
# npm
npm install merlo-ui

# yarn
yarn add merlo-ui
```

#### To use checkboxes, spinner or icons, also install react-native-svg

```sh
# npm
npm install react-native-svg

# yarn
yarn add react-native-svg
```

#### Modify your tailwind.config.js

```diff
// tailwind.config.js

+ const { merloui } = require("merlo-ui/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
+   "node_modules/merlo-ui/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  darkMode: "class",
+ plugins: [merloui()],
}
```

## Usage

```js
import { Button } from 'merlo-ui'

// ...

;<Button color="success" variant="flat">
  Button
</Button>
```

## [Preview](#preview)

![merlo-ui-showcase](https://github.com/user-attachments/assets/e381b842-9b85-44f3-95cb-72362ef5c8d5)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
