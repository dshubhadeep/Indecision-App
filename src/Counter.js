import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        const count = localStorage.getItem('cnt');
        this.setState(() => ({ count: parseInt(count) }));
        console.log(count);
    }
    componentDidUpdate() {
        const count = this.state.count;
        localStorage.setItem('cnt', count);
    }
    handleAddOne() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
    handleMinusOne() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));

    }
    handleReset() {
        this.setState((prevState) => ({ count: 0 }));
    }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button disabled={!this.state.count} onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

export default Counter;