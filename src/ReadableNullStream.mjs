import { Readable } from 'stream';

export class ReadableNullStream extends Readable {
    constructor(options) {
        super(options);
    }

    _read(size) {
        for (let i = 0; i < size; i++) {
            this.push(Buffer.alloc(1).fill(0));
        }
    }
}
