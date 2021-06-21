import React from "react";

import Tile, { TileEnum } from "./Tile";

export default class Board extends React.Component<
  {
    isDown: boolean;
    mouseDown: (down: boolean) => void;
    selectedTileType: TileEnum;
  },
  { startPlaced: boolean; goalPlaced: boolean }
> {
  constructor(props: {
    isDown: boolean;
    mouseDown: (down: boolean) => void;
    selectedTileType: TileEnum;
  }) {
    super(props);

    this.state = {
      startPlaced: false,
      goalPlaced: false,
    };

    this.placeStart = this.placeStart.bind(this);
    this.placeGoal = this.placeGoal.bind(this);
    this.removeStart = this.removeStart.bind(this);
    this.removeGoal = this.removeGoal.bind(this);
  }

  placeStart() {
    if (!this.state.startPlaced) {
      this.setState({ startPlaced: true });
      return true;
    } else return false;
  }

  placeGoal() {
    if (!this.state.goalPlaced) {
      this.setState({ goalPlaced: true });
      return true;
    } else return false;
  }

  removeStart() {
    this.setState({ startPlaced: false });
  }

  removeGoal() {
    this.setState({ goalPlaced: false });
  }

  renderSquare(i: number) {
    return (
      <Tile
        key={i}
        isDown={this.props.isDown}
        selectedType={this.props.selectedTileType}
        placeStart={this.placeStart}
        placeGoal={this.placeGoal}
        removeStart={this.removeStart}
        removeGoal={this.removeGoal}
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
