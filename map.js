'use strict'

var ndarray = require('ndarray')

module.exports = parseTerrain

function parseTerrain(str) {
  var lines = str.split('\n')

  if(lines.length <= 5 || lines[0] !== 'type octile') {
    return null
  }

  var hstr = lines[1].split(' ')
  var wstr = lines[2].split(' ')

  if(hstr[0] !== 'height' ||
    hstr.length !== 2 ||
    wstr[0] !== 'width' ||
    wstr.length !== 2) {
    return null
  }

  var h = hstr[1]|0
  var w = wstr[1]|0

  if(lines[3] !== 'map' || lines.length < h+4) {
    return null
  }

  var data = new Uint8Array(h*w)
  var result = ndarray(data, [w, h])
  for(var i=0; i<h; ++i) {
    var l = lines[i+4]
    if(l.length !== w) {
      return null
    }

    for(var j=0; j<w; ++j) {
      switch(l.charCodeAt(j)) {
        case 46: // .
        case 71: // G
          result.set(i, j, 0)
        break

        case 64: // @
        case 79: // O
        case 84: // T
          result.set(i, j, 1)
        break

        case 83: // S
          result.set(i, j, 2)
        break

        case 87: // W
          result.set(i, j, 3)
        break

        default:
          return null
      }
    }
  }

  return result
}
