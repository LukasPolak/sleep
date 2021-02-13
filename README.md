# sleep

![checks-status](https://img.shields.io/github/checks-status/LukasPolak/sleep/main?style=flat-square) ![workflow/status](https://img.shields.io/github/workflow/status/lukaspolak/sleep/CI?style=flat-square) ![codecov](https://img.shields.io/codecov/c/github/lukaspolak/sleep?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/@lukaspolak/sleep?style=flat-square) ![npm](https://img.shields.io/npm/v/@lukaspolak/sleep?style=flat-square)

Resolve a promise after specified timeout

## Demo

[CodeSandbox](https://codesandbox.io/s/sleep-og2ry?file=/src/App.tsx)

## Getting started

To use this package, you only need to install this dependency, import it and invoke the `sleep` function, e.g.:

```js
import { sleep } from '@lukaspolak/sleep'

// async/await syntax
const asyncFn = async () => {
  await sleep(500) // Promise will be resolved in 500ms

  //...
}

// then syntax
sleep(500).then(() => {
  // ...
})
```

### Install

```bash
npm install @lukaspolak/sleep
```

or

```bash
yarn add @lukaspolak/sleep
```

## Contributing

Please read the [Contribution guidelines](.github/CONTRIBUTING.md) to start with your awesome contributions!

## Why the library is prefixed with `@lukaspolak/`

There are a lot of similar libraries/packages on [GitHub](https://github.com/features/packages) and [npm](https://www.npmjs.com/), that can do the same. I wanted to enhance my programming skills, and I didn't want to find a unique name for the package.
