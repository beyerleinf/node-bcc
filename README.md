![Maintenance](https://img.shields.io/maintenance/yes/2021.svg?style=flat-square) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org) [![license](https://img.shields.io/github/license/beyerleinf/node-bcc.svg?style=flat-square)](https://github.com/beyerleinf/node-bcc/blob/master/LICENSE.md) [![npm](https://img.shields.io/npm/v/node-bcc.svg?style=flat-square)](https://www.npmjs.com/package/node-bcc) [![npm](https://img.shields.io/npm/dm/node-bcc.svg?style=flat-square)](https://www.npmjs.com/package/node-bcc) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/beyerleinf/node-bcc/Node%20Workflow?style=flat-square) [![Codecov](https://img.shields.io/codecov/c/github/beyerleinf/node-bcc.svg?style=flat-square)](https://codecov.io/gh/beyerleinf/node-bcc) [![David](https://img.shields.io/david/beyerleinf/node-bcc.svg?style=flat-square)](https://github.com/beyerleinf/node-bcc) [![David](https://img.shields.io/david/dev/beyerleinf/node-bcc.svg?style=flat-square)](<![David](https://img.shields.io/david/beyerleinf/node-bcc.svg?style=flat-square)>) [![Known Vulnerabilities](https://snyk.io/test/github/beyerleinf/node-bcc/badge.svg?style=flat-square)](https://snyk.io/test/github/beyerleinf/node-bcc)

# node-bcc

A simple Block Check Character Library.
This library provides its own TypeScript type definitions.

## Things to come

- Buffer Support
- CLI application
- 0x-prepended strings
- Add more and better examples

## How to use

### Install

You can install `node-bcc` using `npm`.

```bash
npm install --save node-bcc
```

### Usage

For the full (generated) documentation go to [the Documentation](https://docs.beyerleinf.de/node-bcc)

```typescript
import { Bcc } from 'node-bcc';

console.log(Bcc.calculate(['A4', '37', 'F6', 'F8', 'CD']));
// 80
```

### Helper Classes

#### Hex

```typescript
import { Hex } from 'node-bcc';

console.log(Hex.split('AABBCC'));
// [AA,BB,CC]
```

#### Ascii

```typescript
import { Ascii } from 'node-bcc';

console.log(Ascii.asciiToByteArray('AABBCC'));
// [65, 66, 67]
```
