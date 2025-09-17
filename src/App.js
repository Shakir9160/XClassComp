import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement} style={{ marginLeft: "10px" }}>
          Decrement
        </button>
      </div>
    );
  }
}

export default App;
