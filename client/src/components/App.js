import React from "react";
import data from "./data.json";

class App extends React.Component {
  state = { id: 0 };
  componentDidMount() {}

  btn = () => {
    this.setState({
      id: this.state.id !== data.length - 1 ? this.state.id + 1 : 0,
    });
  };

  render() {
    const { id } = this.state;
    const it = data[id]
    return (
      <div>
        <button style={{backgroundColor: it.color}} class="ui button" onClick={() => this.btn()}>
          {it.name} {it.btName}{" "}
        </button>

        <div>
          Dabar yra {it.name} {it.btName}
        </div>
      </div>
    );
  }
}
export default App;
