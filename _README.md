# Library

[![Npm package version](https://img.shields.io/npm/v/library.svg?style=flat-square)](https://www.npmjs.com/package/library)
[![Travis](https://img.shields.io/travis/rbartoli/library.svg?style=flat-square)](https://travis-ci.org/rbartoli/library)
[![Npm dependencies](https://david-dm.org/rbartoli/library.svg)](https://www.npmjs.com/package/library)
[![Npm total dowloads](https://img.shields.io/npm/dt/library.svg?style=flat-square)](https://www.npmjs.com/package/library)
[![License](https://img.shields.io/github/license/rbartoli/library.svg?style=flat-square)](/LICENSE)

Description.

## Demo
<a href="http://jsfiddle.net/gh/get/library/pure/rbartoli/library/tree/master/example"><img src="https://github.com/rbartoli/library/raw/master/example/screenshot.png" width="574"></a>

[Demo](http://jsfiddle.net/gh/get/library/pure/rbartoli/library/tree/master/example)

## Features
- Feature

##  Installation
```bash
npm install --save library
```

## Usage
### `library(argument*, options?)`
Initialise `library` by passing both `argument` and `argument` required arguments.

#### `argument`
The _Argument_ to display the slider in.

```js
var library = library(argument, argument)
library.init()
```

## Options
You can also provide an `options` object. Here's an **overview of the default values**.

```js
library(argument, {
  option: true
});
```

#### `options.option`
Enable or disable option.

## API
Method | Arguments               | Method Description
-----------|----------------------------------|-------------------------------------------------------------------------------------
`init`     |                      | Initialise the slider

## Tests
```bash
npm test
```

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
