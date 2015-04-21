parse-grid-bench
================
Parses the data files from Nathan Sturtevant's [grid path finding benchmark](http://www.movingai.com/benchmarks/).

# Example

```javascript
var fs = require('fs')
var path = require('path')
var imshow = require('ndarray-imshow')
var parseMap = require('../map')
var parseScen = require('../scenario')

//Read in data
var mapStr = fs.readFileSync('./maps/bg512/AR0011SR.map', 'utf-8')
var scenStr = fs.readFileSync('./scenarios/bg512/AR0011SR.map.scen', 'utf-8')

console.log(parseScen(scenStr))
imshow(parseMap(mapStr))
```

### Output:

```
[ { bucket: 61,
    map: 'maps/bgmaps/AR0011SR.map',
    width: 512,
    height: 512,
    srcX: 210,
    srcY: 395,
    dstX: 87,
    dstY: 201,
    length: 244.95 },
  { bucket: 33,
    map: 'maps/bgmaps/AR0011SR.map',
    width: 512,
    height: 512,
    srcX: 244,
    srcY: 370,
    dstX: 359,
    dstY: 376,
    length: 132.4 },
 ...
]
```

<img src="img/mapimg.png" width=512>

# Install

```
npm i parse-grid-bench
```

# API

#### `var map = require('parse-grid-bench/map')(mapStr)`
Parses a map file from a string

* `mapStr` is a string containing the map data

**Returns** An ndarray representing the map data.  Each entry in the map file has the following meaning:

* `0` free terrain
* `1` impassable terrain/obstacle
* `2` swamp
* `3` water

#### `var scen = require('parse-grid-bench/scenario')(scenStr)`
Parses a scenario file.

* `scenStr` is a string containing the scenario

**Returns** An array of scenario data.  Each scenario has the following properties:

* `bucket` A random number, ignore it
* `map` A path to the map data for the scenario.
* `width` the width of the map data in the `map` string
* `height` the height of the map data in the `map` string
* `srcX` the start X position
* `srcY` the start Y position
* `dstX` the goal X position
* `dstY` the goal Y position
* `length` the optimal path length, assuming diagonal motion allowed

# License
(c) 2015 Mikola Lysenko. MIT License
