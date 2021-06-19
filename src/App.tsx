import React from "react";
import "./App.css";
import Board from "./Board";
import TileSelector from "./TileSelector";

export default class App extends React.Component<{}, { isDown: boolean }> {
  constructor(props: {}) {
    super(props);

    this.state = { isDown: false };

    this.mouseDown = this.mouseDown.bind(this);
  }

  mouseDown(down: boolean) {
    console.log(`handleMouseUp: ${this.state.isDown}`);
    this.setState({ isDown: down });
  }
  

  render() {
    const isDown = this.state.isDown;

    return (
      <div className="App" onMouseUp={() => this.mouseDown(false)} onMouseLeave={() => this.mouseDown(false)}>
        <TileSelector />
        <Board isDown={isDown} mouseDown={this.mouseDown}/>
      </div>
    );
  }
}
