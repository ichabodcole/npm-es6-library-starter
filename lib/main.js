export class Main {

    constructor(options={}) {
        this.msg = options.msg || 'Hello World';
    }

    saySomething (msg) {
        return msg || this.msg;
    }
}
