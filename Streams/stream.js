const fs = require('fs');

/**
 * Function to read a file with streaming
 */

let readFileStream = () => {
  let readStream = fs.createReadStream('example.txt');
  //setting the format to utf-8. Otherwise buffer code will be displayed
  readStream.setEncoding('utf-8');
  readStream.on('data', chunk => {
    console.log(chunk);
  });
  readStream.on('error', err => {
    console.log(err.stack);
  });
  readStream.on('finish', () => {
    console.log('File Read Operation : Successfull');
  });
  //   console.log(readStream);
};

/**
 * Function to write a file with streaming
 */
let writeFileStream = () => {
  let writeStream = fs.createWriteStream('writeStream.txt');
  writeStream.write('Hi this is write stream \n');
  writeStream.write('This is second line \n');
  writeStream.end();
  let readStream = fs.createReadStream('writeStream.txt');
  readStream.setEncoding('UTF8');
  readStream.on('data', data => {
    console.log(data);
  });
  readStream.on('error', err => {
    console.log(err);
  });
  readStream.on('end', () => {
    console.log('Read the wrote data successfully');
  });
};

/**
 * Function to copy one stream to another
 */
let copyStreamToStream = () => {
  let readInputStream = fs.createReadStream('example.txt');
  //file to send data from example.txt to exampleOutput.txt
  let outputStream = fs.createWriteStream('exampleOutput.txt');
  readInputStream.pipe(outputStream);
};

module.exports = {
  readFileStream: readFileStream,
  writeFileStream: writeFileStream,
  copyStreamToStream: copyStreamToStream
};
