const fs = require('fs');

/**
 * Function to read file synchronously
 */
let readFileSynschronously = () => {
  let dataInFileToReadInBufferFormat = fs.readFileSync('./fileToRead.txt');
  console.log('Data in buffer format');
  console.log(dataInFileToReadInBufferFormat);

  let dataInFileToReadInEncodedFormat = fs.readFileSync(
    './fileToRead.txt',
    'utf-8'
  );
  console.log('Data in encoded format');
  console.log(dataInFileToReadInEncodedFormat);
};

/**
 * Function to read file Asyncronously
 */
let readFileAsyncronously = () => {
  fs.readFile('fileToRead.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log('Error occured while reading the file');
      console.log(err);
    } else {
      console.log('Data is read succesfully');
      console.log(data);
    }
  });
};

/**
 * Function to read file from Directory Syncronously
 */
let readFileFromDirectorySyncronously = () => {
  let dataFromDirectory = fs.readdirSync('./coreNode');
  console.log('Files present the directory');
  console.log(dataFromDirectory);
};

/**
 * Function to read file from Directory Asyncronously
 */
let readFileFromDirectoryAsyncronously = () => {
  fs.readdir('./coreNode', (err, files) => {
    if (err) {
      console.log('Error occured while reading the file');
      console.log(err);
    } else {
      console.log(files);
      console.log(`Files present the directory are : ${files}`);
    }
  });
};

/**
 * Function to write file Synchronously
 */
let writeFileSynchronously = () => {
  let writeFileData = `This data will be inserted to a new file synchronously by fs module of Nodejs.`;
  console.log('File writing started Synchronously..');
  fs.writeFileSync('writeFile.txt', writeFileData);
  /**
   * Getting the data which was written asynchronously..
   * if 'utf-8' is not given, the data will be read in buffer code..
   */
  fs.readFile('writeFile.txt', 'utf-8', (err, data) => {
    if (err) {
      console.log('Below error occured while reading the file');
      console.log(err);
    } else {
      console.log('File Writing completed..');
      console.log(`Data is ${data}`);
    }
  });
};

/**
 * Function to write file Asynchronously
 */
let writeFileAsynchronously = () => {
  let writeFileData = `This data will be inserted to a new file asynchronously by fs module of Nodejs`;
  console.log('File writing started Asynchronously..');
  fs.writeFile('writeFileAsync.txt', writeFileData, err => {
    if (err) {
      console.log('Below error occured while writing file asynchronously..');
      console.log(err);
    } else {
      /**
       * Reading the file content Asynchronously
       */
      fs.readFile('writeFileAsync.txt', 'utf-8', (err, data) => {
        if (err) {
          console.log(
            'Below error occured while reading file asynchronously..'
          );
          console.log(err);
        } else {
          console.log(`File writing completed..`);
          console.log(`Data is ${data}`);
        }
      });
    }
  });
};

module.exports = {
  readFileSynschronously: readFileSynschronously,
  readFileAsyncronously: readFileAsyncronously,
  readFileFromDirectorySyncronously: readFileFromDirectorySyncronously,
  readFileFromDirectoryAsyncronously: readFileFromDirectoryAsyncronously,
  writeFileSynchronously: writeFileSynchronously,
  writeFileAsynchronously: writeFileAsynchronously
};
