const { Console } = require('console')
const fs = require('fs')

const parse = file => 
    fs.readFileSync(file, 'utf-8')
        .split('\n')
        .filter(item => item !== '')


const shrek = parse('./shrek.txt')
const fiona = parse('./fiona.txt')
const donkey = parse('./donkey.txt')
const farquaad = parse('./farquaad.txt')

const quotes = {
    'shrek': shrek,
    'donkey': donkey,
    'fiona': fiona,
    'farquaad': farquaad
}

const output = fs.createWriteStream('./quotes.js')
const logger = new Console(output)

logger.dir(quotes, { 'maxArrayLength': null} )

// run:
// node index.js
// then manually clean quotes of common typos with ctrl+f