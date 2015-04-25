'use strict'

var fs = require('fs')
var path = require('path')
var imshow = require('ndarray-imshow')
var parseMap = require('../map')
var parseScen = require('../scenario')

var mapStr = fs.readFileSync(path.join(__dirname, '../data/maps/arena2.map'), 'utf-8')
var scenStr = fs.readFileSync(path.join(__dirname, '../data/scenarios/arena2.map.scen'), 'utf-8')


var map       = parseMap(mapStr)
var scenarios = parseScen(scenStr)

//Plot points and show image
for(var i=0; i<scenarios.length; ++i) {
  map.set(scenarios[i].srcY, scenarios[i].srcX, 2)
  map.set(scenarios[i].dstY, scenarios[i].dstX, 3)
}
imshow(map)
