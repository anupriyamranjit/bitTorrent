'use strict'
// Imports
const fs = require('fs');
const bencode = require('bencode');
const dgram = require('dgram');
const Buffer = require('buffer').Buffer;
const urlParse = require('url').parse;


// Read File
let torrent = fs.readFileSync('puppy.torrent')

// Use bencode decoding
torrent = bencode.decode(torrent)


/*
Print content of File in utf8

Originally returns a buffer

Announce property in object is the tracker URL
 */

const url = urlParse(torrent.announce.toString('utf8'));

const socket = dgram.createSocket('udp4');

const myMessage = Buffer.from("hello?", 'utf8');

socket.send(myMessage, 0, myMessage.length, url.port, url.host, () => {});

socket.on('message', msg => {
    console.log('message is', msg);
  });





