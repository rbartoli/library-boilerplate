# Library boilerplate
A boilerplate to start a library using ES2015.

## Features
- [ES2015](https://babeljs.io/docs/learn-es2015)
- [UMD builds](https://github.com/umdjs/umd) using
    - [Webpack](https://github.com/webpack/webpack)

## Tools
- [Webpack](https://github.com/webpack/webpack)
- [Babel 6](https://github.com/babel/babel) with presets for:
    - ES2015 using [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015)
- [ESLint](https://github.com/eslint/eslint) configured to:
    - lint page on save using [eslint-loader](https://github.com/MoOx/eslint-loader)
- [Mocha](https://mochajs.org/) using:
    - [Chai](http://chaijs.com/) as assertion library
- [Travis](http://travis-ci.org) configured to test:
    - Node 4, 5 and 6
    - Only `master` branch

## Getting started
```bash
$ git clone https://github.com/rbartoli/library-boilerplate.git
$ npm i
$ npm start
```
