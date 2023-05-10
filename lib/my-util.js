'use strict';

const fs = require('fs')

function logToFile(filename, output) {
	fs.appendFileSync(filename, output)
	fs.appendFileSync(filename, '\n\n')
}

exports.logPlugin = (output) => {
	logToFile('./plugin.txt', output)
}

exports.logFunc = (output) => {
	// logToFile('./plugin.txt', output)
}
