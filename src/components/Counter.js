import React, { Component } from 'react';

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 15
    }
  this.handleAdd = this.handleAdd.bind(this);
  this.handleSub = this.handleSub.bind(this);
  this.handleReset = this.handleReset.bind(this);
  }

  handleAdd(){
    this.setState({ count: this.state.count + 10 });
  }

  handleSub(){
    this.setState({ count: this.state.count - 2 });
  }

  handleReset(){
    this.setState({ count: 15 });
  }

  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleAdd}>Add 10</button>
        <button onClick={this.handleSub}>Subtract 2</button>
        <button onClick={this.handleReset}>Reset to 15</button>
      </div>
    )
  }
}

export default Counter;
