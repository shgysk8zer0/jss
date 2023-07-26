# @shgysk8zer0/jss
Simple JavaScript StyleSheets & Palettes

[![CodeQL](https://github.com/shgysk8zer0/jss/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/shgysk8zer0/jss/actions/workflows/codeql-analysis.yml)
![Node CI](https://github.com/shgysk8zer0/jss/workflows/Node%20CI/badge.svg)
![Lint Code Base](https://github.com/shgysk8zer0/jss/workflows/Lint%20Code%20Base/badge.svg)

[![GitHub license](https://img.shields.io/github/license/shgysk8zer0/jss.svg)](https://github.com/shgysk8zer0/jss/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/shgysk8zer0/jss.svg)](https://github.com/shgysk8zer0/jss/commits/master)
[![GitHub release](https://img.shields.io/github/release/shgysk8zer0/jss?logo=github)](https://github.com/shgysk8zer0/jss/releases)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/shgysk8zer0?logo=github)](https://github.com/sponsors/shgysk8zer0)

[![npm](https://img.shields.io/npm/v/@shgysk8zer0/jss)](https://www.npmjs.com/package/@shgysk8zer0/jss)
![node-current](https://img.shields.io/node/v/@shgysk8zer0/jss)
![npm bundle size gzipped](https://img.shields.io/bundlephobia/minzip/@shgysk8zer0/jss)
[![npm](https://img.shields.io/npm/dw/@shgysk8zer0/jss?logo=npm)](https://www.npmjs.com/package/@shgysk8zer0/jss)

[![GitHub followers](https://img.shields.io/github/followers/shgysk8zer0.svg?style=social)](https://github.com/shgysk8zer0)
![GitHub forks](https://img.shields.io/github/forks/shgysk8zer0/jss.svg?style=social)
![GitHub stars](https://img.shields.io/github/stars/shgysk8zer0/jss.svg?style=social)
[![Twitter Follow](https://img.shields.io/twitter/follow/shgysk8zer0.svg?style=social)](https://twitter.com/shgysk8zer0)

[![Donate using Liberapay](https://img.shields.io/liberapay/receives/shgysk8zer0.svg?logo=liberapay)](https://liberapay.com/shgysk8zer0/donate "Donate using Liberapay")
- - -

- [Code of Conduct](./.github/CODE_OF_CONDUCT.md)
- [Contributing](./.github/CONTRIBUTING.md)
<!-- - [Security Policy](./.github/SECURITY.md) -->

---

Best when used with [`@shgysk8zer0/jswaggersheets`](https://npmjs.com/package/@shgysk8zer0/jswaggersheets).

## Example

```js
import { createSheet } from '@shgysk8zer0/jswaggersheets/swagger.js';
import * as bootstrap from '@shgysk8zer0/jss/palette/bootstrap.js';
import { systemFonts } from '@shgysk8zer0/jss/system-fonts.js';
import { gnomeStyles } from '@shgysk8zer0/jss/gnome.js';
import { utility } from '@shgysk8zer0/jss/utility.js';
import { base } from '@shgysk8zer0/jss/base.js';

Promise.all([
	createSheet(base),
	createSheet(systemFonts),
	createSheet(gnomeStyles),
	createSheet(utility),
]).then(sheets => document.adoptedStyleSheets = sheets);

/* Maps to `--bs-red-200` */
document.querySelector('.nav').style.setProperty('background-color', bootstrap.red[1]);
```
