'use strict'

module.exports = parseScenario

function Scenario(bucket, map, width, height, srcX, srcY, dstX, dstY, len) {
  this.bucket = bucket
  this.map    = map
  this.width  = width
  this.height = height
  this.srcX   = srcX
  this.srcY   = srcY
  this.dstX   = dstX
  this.dstY   = dstY
  this.length = len
}

function parseScenario(str) {
  var lines = str.split('\n')
  if(lines.length < 2 || !/^version .*$/.test(lines[0])) {
    return null
  }
  var cases = new Array(lines.length-1)
  for(var i=1; i<lines.length; ++i) {
    var tok = lines[i].split(/\s+/)
    cases[i-1] = new Scenario(
      tok[0]|0,
      tok[1],
      tok[2]|0,
      tok[3]|0,
      tok[4]|0,
      tok[5]|0,
      tok[6]|0,
      tok[7]|0,
      +tok[8]
    )
  }
  return cases
}
