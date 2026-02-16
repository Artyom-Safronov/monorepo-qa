/* eslint-disable @typescript-eslint/explicit-function-return-type */
console.log()

export class Component {
    name = "Hello"

    getName() {
        return this.name
    }

    constructor(props) {
        this.props = props
    }
}

const test = new Component({});

console.log(test);