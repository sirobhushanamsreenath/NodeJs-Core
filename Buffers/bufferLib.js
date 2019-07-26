const Buffer = require('buffer').Buffer



/* Creating A Empty Buffer */
let allocateBuffer = () => {
    const buffer = Buffer.alloc(10)
    console.log(buffer)
}
/*Creating A Buffer From Text */
let formABufferFromText = () => {
    let text = `Prior to the introduction of TypedArray in ECMAScript 2015 (ES6),
                the JavaScript language had no mechanism for reading or manipulating streams of binary data. 
                The Buffer class was introduced as part of the Node.js API to make it possible to interact with 
                octet streams in the context of things like TCP streams and file system operations.`
    const textBuffer = Buffer.from(text)
    console.log('This Is Text Buffer')
    console.log(textBuffer)

}
/* Writing To Buffers */
let writingToBuffer = () => {
    const buffer = Buffer.alloc(20)
    console.log('This Is Empty Buffer')
    console.log(buffer)

    buffer.write('Hello World!')

    console.log('This Is Raw Buffer')
    console.log(buffer)

    /* Only 10 Character Will Be Printed*/
    console.log('Encode The Buffer')
    console.log(buffer.toString())
}


let readingFromBuffer = () => {
    const buffer = Buffer.alloc(100)
    buffer.write('Writes string to buf at offset according to the character encoding in encoding.')
     /* Read From Buffer */

     /* Reading From Buffer */
     console.log(buffer.toString('ascii',0,15))

}


/* Buffer Operation */

/* Compare Buffer */
let compareBuffer = () => {
    
    const buffer = Buffer.from('This Is Buffer')
    const brotherBuffer = Buffer.from('This Is Buffer')
    const notABrotherBuffer = Buffer.from('Another Buffer')

    /* When The Buffers Are Same It Will Return 0*/
    console.log(buffer.compare(brotherBuffer))

    /* When The Buffers Are Not Same It Will Return 1*/
    console.log(buffer.compare(notABrotherBuffer))
}

/* Compare A Particular Portion Of Buffer */
let comparePartOfABuffer = () => {
    const buffer = Buffer.from('This Is Buffer')
    const brotherBuffer = Buffer.from('This Is Buffer')
    const notABrotherBuffer = Buffer.from('Buffer')

    console.log(buffer)
    console.log(notABrotherBuffer)
    console.log(notABrotherBuffer.compare(buffer,0,notABrotherBuffer.byteLength,7))
}


let copyBuffer = () => {
    /* Fill Function Fill A Buffer With Particular Value */
    const sourceBuffer = Buffer.alloc(100).fill('Filled With String ')
    /* Source Buffer And Destination Buffer Allocation Are Not Same */
    const destBuffer = Buffer.alloc(50)

    /* Content Of The Source Buffer */
    console.log(`/* Content Of The Source Buffer */`)
    console.log(sourceBuffer.toString())

    sourceBuffer.copy(destBuffer)

    /* Content Of The Destination Buffer */
    console.log(`/* Content Of The Destination Buffer */`)
    console.log(destBuffer.toString())

}
 module.exports = {
     allocateBuffer: allocateBuffer,
     formABufferFromText: formABufferFromText,
     writingToBuffer: writingToBuffer,
     readingFromBuffer: readingFromBuffer,
     compareBuffer: compareBuffer,
     comparePartOfABuffer: comparePartOfABuffer,
     copyBuffer: copyBuffer
 }
