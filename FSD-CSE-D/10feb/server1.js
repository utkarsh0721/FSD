const fs = require('fs').promises;

async function readFileExample() {
    try {
        const data = await fs.readFile('example.txt', 'utf-8');
        console.log('File content:',data);
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

readFileExample();

const { promisify } = require('util');
const readFileAsync = promisify(require('fs').readFile);

async function readWithPromisify() {
    
}