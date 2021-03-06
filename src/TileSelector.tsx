import React from "react";
import { TileEnum } from "./Tile";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core/styles";

export default class TileSelector extends React.Component<
  { setSelectedTileType: (type: TileEnum) => void },
  {}
> {

  render() {
    return (
      <StylesProvider injectFirst>
        <div className="TileSelector">
          <Button
            variant="contained"
            className="start-btn"
            onClick={() => this.props.setSelectedTileType(TileEnum.Start)}
          >
            Start
          </Button>
          <Button
            variant="contained"
            className="goal-btn"
            onClick={() => this.props.setSelectedTileType(TileEnum.Goal)}
          >
            Goal
          </Button>
          <Button
            variant="contained"
            className="wall-btn"
            onClick={() => this.props.setSelectedTileType(TileEnum.Wall)}
          >
            Wall
          </Button>
          <Button
            variant="contained"
            className="erase-btn"
            onClick={() => this.props.setSelectedTileType(TileEnum.Default)}
          >
            Erase
          </Button>
          <Button
            variant="contained"
            className="play-btn"
            onClick={() => this.props.setSelectedTileType(TileEnum.Default)}
          >
            Play
          </Button>
        </div>
      </StylesProvider>
    );
  }
}
