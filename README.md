# tiniest-csv

[![NPM version][npm-img]][npm-url]
[![License][license-img]][license-url]
[![Build status][travis-img]][travis-url]

Parse a CSV string into a two-dimensional array.

## Installation

```
npm install tiniest-csv
```

## Usage

``` javascript
var fs = require('fs')
var csv = require('tiniest-csv')

var csvData = fs.readFileSync('data.csv', 'utf8')
console.log(csv(csvData))
// [
//   ['key', 'value'],
//   ['one', 'two'],
//   ['three', 'four'],
//   ['five', 'six']
// ]

var tsvData = fs.readFileSync('data.tsv', 'utf8')
console.log(csv(tsvData, /\t/))
// [
//   ['key', 'value'],
//   ['one', 'two'],
//   ['three', 'four'],
//   ['five', 'six']
// ]
```

## Caveats

The module is meant to be used on smaller sets of data. If you need maximum
speed, use [csv-parser][csv-parser].

## License

[MIT][license-url]

[npm-img]: https://img.shields.io/npm/v/tiniest-csv.svg?style=flat-square
[npm-url]: https://npmjs.com/package/tiniest-csv
[license-img]: http://img.shields.io/npm/l/tiniest-csv.svg?style=flat-square
[license-url]: LICENSE
[travis-img]: https://img.shields.io/travis/gummesson/tiniest-csv.svg?style=flat-square
[travis-url]: https://travis-ci.org/gummesson/tiniest-csv
[csv-parser]: https://github.com/mafintosh/csv-parser/
