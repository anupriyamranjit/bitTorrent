'use strict'
// Import FileSystem
const fs = require('fs')

// Read File
const torrent = fs.readFileSync('puppy.torrent')

// Print content of File in utf8
// Originally returns a buffer
console.log(torrent.toString('utf8'))



