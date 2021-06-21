import React, { useState } from "react";

export enum TileEnum {
  Default,
  Start,
  Goal,
  Wall,
  OptimalPath,
  SuboptimalPath,
}

export default class Tile extends React.Component<
  {
    key: number;
    id: number;
    isDown: boolean;
    selectedType: TileEnum;
    placeStart: () => boolean;
    placeGoal: () => boolean;
    removeStart: () => void;
    removeGoal: () => void;
  },
  {
    type: TileEnum;
    className: string;
  }
> {
  constructor(props: {
    key: number;
    id: number;
    isDown: boolean;
    selectedType: TileEnum;
    placeStart: () => boolean;
    placeGoal: () => boolean;
    removeStart: () => void;
    removeGoal: () => void;
  }) {
    super(props);
    this.state = {
      type: TileEnum.Default,
      className: "default-tile",
    };
  }

  changeType() {
    if (this.props.selectedType !== this.state.type) {
      this.handleSpecialRemovals();

      this.setState({ type: this.props.selectedType }, () => {
        switch (this.state.type) {
          case TileEnum.Default:
            this.setState({ className: "default-tile" });
            break;
          case TileEnum.Start:
            if (!this.props.placeStart()) break;
            this.setState({ className: "start-tile" });
            break;
          case TileEnum.Goal:
            if (!this.props.placeGoal()) break;
            this.setState({ className: "goal-tile" });
            break;
          case TileEnum.Wall:
            this.setState({ className: "wall-tile" });
            break;
        }
      });
    }
  }

  handleSpecialRemovals() {
    if (this.state.type === TileEnum.Start) this.props.removeStart();
    else if (this.state.type === TileEnum.Goal) this.props.removeGoal();
  }

  handleMouseEnter() {
    if (this.props.isDown) {
      this.changeType();
    }
  }

  render() {
    const className = this.state.className;
    return (
      <div
        className={className}
        onMouseDownCapture={this.changeType.bind(this)}
        onMouseEnter={this.handleMouseEnter.bind(this)}
      >
        <HoverTile />
      </div>
    );
  }
}

function HoverTile(): JSX.Element {
  const [opacity, setOpacity] = useState(0);
  return (
    <div
      className="hover-tile"
      onMouseEnter={() => setOpacity(0.3)}
      onMouseLeave={() => setOpacity(0)}
      style={{ opacity: opacity }}
    />
  );
}
