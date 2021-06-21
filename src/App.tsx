import React from "react";
import "./App.css";
import Board from "./Board";
import { TileEnum } from "./Tile";
import TileSelector from "./TileSelector";

export default class App extends React.Component<
  {},
  { isDown: boolean; selectedTileType: TileEnum }
> {
  constructor(props: {}) {
    super(props);

    this.state = { isDown: false, selectedTileType: TileEnum.Default };

    this.mouseDown = this.mouseDown.bind(this);
    this.setSelectedTileType = this.setSelectedTileType.bind(this);
  }

  mouseDown(down: boolean) {
    this.setState({ isDown: down });
  }

  setSelectedTileType(type: TileEnum) {
    this.setState({ selectedTileType: type });
  }

  render() {
    const isDown = this.state.isDown;

    return (
      <div
        className="App"
        onMouseUp={() => this.mouseDown(false)}
        onMouseLeave={() => this.mouseDown(false)}
      >
        <TileSelector setSelectedTileType={this.setSelectedTileType} />
        <Board isDown={isDown} mouseDown={this.mouseDown} />
      </div>
    );
  }
}
