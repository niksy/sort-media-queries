# sort-media-queries

Sort media queries by their applicability.

## Installation

```sh
# Node
npm install git://github.com/niksy/sort-media-queries.git

# Browser
bower install niksy/sort-media-queries
```

## API

### `sort(list, [propertyName])`

Returns: `Array`

Sorts media queries, either as list of strings or objects. Property argument is used when sorting list of objects.

#### list

Type: `Array`

List of media queries to sort. Can be list with strings and list with objects.

If array is passed and nothing can be sorted, it will return original array. Otherwise, if passed argument is not array, it will return empty array.

#### propertyName

Type: `String`

Property used to sort objects inside media queries list.

### `sortString(list)`

Returns: `Array`

Sorts media queries with strings as list items.

#### list

Type: `Array`

See [sort → list](#list).

### `sortObject(list, propertyName)`

Returns: `Array`

Sorts media queries with objects as list items using provided property.

#### list

Type: `Array`

See [sort → list](#list).

#### propertyName

Type: `String`

See [sort → propertyName](#propertyName).

## Examples

### Initalization

```js
// Node
var smq = require('sort-media-queries');

// Require.js
define(['sort-media-queries'], function ( smq ) {
	// Code away
});

// Global browser module
window.sortMediaQueries;
```

### Usage

```js
smq.sort(["screen and (min-width:1278px)","screen and (min-width:100px)","screen and (min-width:99px)"]);
// ["screen and (min-width:99px)","screen and (min-width:100px)","screen and (min-width:1278px)"]

smq.sortString(["screen and (min-width:1278px)","screen and (min-width:100px)","screen and (min-width:99px)"]);
// ["screen and (min-width:99px)","screen and (min-width:100px)","screen and (min-width:1278px)"]

smq.sortObject([{"media":"screen and (min-width:1278px)","bar":2},{"media":"screen and (min-width:100px)"},{"media":"screen and (min-width:99px)","foo":1}], 'media');
// [{"media":"screen and (min-width:99px)","foo":1},{"media":"screen and (min-width:100px)"},{"media":"screen and (min-width:1278px)","bar":2}]
```

## Browser support

Tested in IE8+ and all modern browsers.

## Acknowledgements

Algorithm for media queries sorting is taken from [buildingblocks/grunt-combine-media-queries](https://github.com/buildingblocks/grunt-combine-media-queries) ([original project license](https://github.com/buildingblocks/grunt-combine-media-queries/blob/master/LICENSE-MIT)). This repo serves only as separate module which can be included in other projects.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)
