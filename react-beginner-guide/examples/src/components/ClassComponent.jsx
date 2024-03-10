import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h2>Sınıf Bileşeni</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Artır</button>
      </div>
    );
  }
}

export default ClassComponent;