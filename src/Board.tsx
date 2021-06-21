import React from "react";

import Tile, { TileEnum } from "./Tile";

export default class Board extends React.Component<
  {
    isDown: boolean;
    mouseDown: (down: boolean) => void;
    selectedTileType: TileEnum;
  },
  {}
> {
  renderSquare(i: number) {
    return (
      <Tile
        key={i}
        isDown={this.props.isDown}
        selectedType={this.props.selectedTileType}
      />
    );
  }

  render() {
    let tiles = [];

    for (let i = 0; i < 100; i++) {
      tiles.push(this.renderSquare(i));
    }

    return (
      <>
        <div
          className="Board"
          onContextMenu={(e) => e.preventDefault()}
          onMouseDown={() => this.props.mouseDown(true)}
          onMouseUp={() => this.props.mouseDown(false)}
          onDragStart={(e) => e.preventDefault()}
        >
          {tiles}
        </div>
      </>
    );
  }
}
