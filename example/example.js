'use strict'

var fs = require('fs')
var path = require('path')
var imshow = require('ndarray-imshow')
var parseMap = require('../map')
var parseScen = require('../scenario')

var mapStr = fs.readFileSync(path.join(__dirname, '../data/maps/bg512/AR0011SR.map'), 'utf-8')
var scenStr = fs.readFileSync(path.join(__dirname, '../data/scenarios/bg512/AR0011SR.map.scen'), 'utf-8')

console.log(parseScen(scenStr))
imshow(parseMap(mapStr))
