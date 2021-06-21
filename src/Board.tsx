import React from "react";

import Tile, { TileEnum } from "./Tile";

export default class Board extends React.Component<
  { isDown: boolean; mouseDown: (down: boolean) => void },
  { tileType: TileEnum }
> {
  constructor(props: { isDown: boolean; mouseDown: (down: boolean) => void }) {
    super(props);
    this.state = {
      tileType: TileEnum.Default
    };

    this.setTileType = this.setTileType.bind(this);
  }

  setTileType(type: TileEnum) {

  }

  renderSquare(i: number) {
    const tileType = this.state.tileType;
    return <Tile key={i} isDown={this.props.isDown} type={tileType}/>;
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
