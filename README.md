![Maintenance](https://img.shields.io/maintenance/yes/2023.svg) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org) [![license](https://img.shields.io/github/license/beyerleinf/node-bcc.svg)](https://github.com/beyerleinf/node-bcc/blob/master/LICENSE.md) [![npm](https://img.shields.io/npm/v/node-bcc.svg)](https://www.npmjs.com/package/node-bcc) [![npm](https://img.shields.io/npm/dm/node-bcc.svg)](https://www.npmjs.com/package/node-bcc) ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/beyerleinf/node-bcc/node.yml) [![Codecov](https://img.shields.io/codecov/c/github/beyerleinf/node-bcc.svg)](https://codecov.io/gh/beyerleinf/node-bcc) [![Known Vulnerabilities](https://snyk.io/test/github/beyerleinf/node-bcc/badge.svg)](https://snyk.io/test/github/beyerleinf/node-bcc)

# node-bcc <!-- omit in toc -->

A simple Block Check Character Library.
This library provides its own TypeScript type definitions.

- [Features](#features)
- [Things to come](#things-to-come)
- [Installation](#installation)
- [Usage](#usage)
  - [Helper Classes](#helper-classes)
    - [Hex](#hex)
    - [Ascii](#ascii)

## Features

- Calculate BCC for `string[]`, `number[]` and `Buffer`
- Helper function to convert ASCII strings to `number[]`
- Helper function to convett hex strings to `string[]`

## Things to come

- [ ] CLI application
- [ ] 0x-prepended strings
- [ ] Add more and better examples

## Installation

You can install `node-bcc` using `npm`.

```bash
npm install --save node-bcc
```

## Usage

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
