![Maintenance](https://img.shields.io/maintenance/yes/2018.svg?style=flat-square) [![license](https://img.shields.io/github/license/beyerleinf/node-bcc.svg?style=flat-square)](https://github.com/beyerleinf/node-bcc/blob/master/LICENSE.md) [![npm](https://img.shields.io/npm/v/node-bcc.svg?style=flat-square)](https://www.npmjs.com/package/node-bcc) [![npm](https://img.shields.io/npm/dm/node-bcc.svg?style=flat-square)](https://www.npmjs.com/package/node-bcc)

[![Travis](https://img.shields.io/travis/beyerleinf/node-bcc.svg?style=flat-square)](https://travis-ci.org/beyerleinf/node-bcc) [![Codecov](https://img.shields.io/codecov/c/github/beyerleinf/node-bcc.svg?style=flat-square)](https://codecov.io/gh/beyerleinf/node-bcc) [![David](https://img.shields.io/david/beyerleinf/node-bcc.svg?style=flat-square)](https://github.com/beyerleinf/node-bcc) [![David](https://img.shields.io/david/dev/beyerleinf/node-bcc.svg?style=flat-square)](![David](https://img.shields.io/david/beyerleinf/node-bcc.svg?style=flat-square)) [![Known Vulnerabilities](https://snyk.io/test/github/beyerleinf/node-bcc/badge.svg?style=flat-square)](https://snyk.io/test/github/beyerleinf/node-bcc)

[![Issue Stats (long form)](https://img.shields.io/issuestats/i/long/github/beyerleinf/node-bcc.svg?style=flat-square)](https://github.com/beyerleinf/node-bcc/issues) [![GitHub issues](https://img.shields.io/github/issues/beyerleinf/node-bcc.svg?style=flat-square)](https://github.com/beyerleinf/node-bcc/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/beyerleinf/node-bcc.svg?style=flat-square)](https://github.com/beyerleinf/node-bcc/pulls) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/beyerleinf/node-bcc.svg?style=flat-square)

# node-bcc

A simple Block Check Character Library.
This library provides its own TypeScript type definitions.

## Things to come

* Make `Bcc` and `Hex` static
* Move `Bcc` and `Hex` to `/bcc` and `/hex` respectively
* CLI application
* 0x-prepended strings
* Add more and better examples

## How to use

### Install

You can install `node-bcc` using `npm`.

``` bash
npm install --save node-bcc
```

### Usage

For the full (generated) documentation go to [the Documentation](https://node-bcc.beyerleinf.de/docs)

#### TypeScript

``` typescript
import {Bcc} from 'node-bcc';

console.log(new Bcc().calculate(['A4', '37', 'F6', 'F8', 'CD']));
// 80
```

#### JavaScript

``` javascript
const Bcc = require('node-bcc').Bcc;

console.log(new Bcc().calculate(['A4', '37', 'F6', 'F8', 'CD']));
// 80
```

### Helper Classes

#### Hex

##### TypeScript

``` typescript
import {Hex} from 'node-bcc'

console.log(new Hex().split('AABBCC'));
// [AA,BB,CC]
```

##### JavaScript

``` javascript
const Hex = require('node-bcc').Hex;

console.log(new Hex().split('AABBCC'));
// [AA,BB,CC]
```

#### Ascii

##### TypeScript

``` typescript
import {Ascii} from 'node-bcc/ascii'

console.log(Ascii.asciiToByteArray('AABBCC'));
// [65, 66, 67]
```

##### JavaScript

``` javascript
const Ascii = require('node-bcc/ascii').Ascii;

console.log(Ascii.asciiToByteArray('AABBCC'));
// [65, 66, 67]
```