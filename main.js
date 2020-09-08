import { createElement, Component, render } from './toy-react'
class MyComponent extends Component {
    constructor() {
        super()
        this.state = {
            a: 1,
            b: 2
        }
    }
    render() {
        return <div>
            <h1>my component</h1>
            {this.children}
            <span>{this.state.a.toString()}</span>
        </div>
    }
}


render(<MyComponent id="a" class="c">

    <div>1</div>
    <div>2</div>
</MyComponent>, document.body)