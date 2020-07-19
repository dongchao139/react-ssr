import stream from 'stream';

class MyTransform extends stream.Transform {
    _transform(data, _encoding, callback) {
        this.push(data);
        callback();
    }
}

export function mergeStringToStream(string1, readableStream, string2) {
    const transformStream = new MyTransform();
    transformStream.write(string1);
    if (typeof readableStream === 'string') {
        transformStream.write(readableStream);
        transformStream.write(string2);
        transformStream.end();
    } else {
        readableStream.pipe(transformStream, {end: false});
        readableStream.on('end', () => {
            transformStream.write(string2);
            transformStream.end();
        });
    }
    return transformStream;
}