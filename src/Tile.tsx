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
  { key: number; isDown: boolean; selectedType: TileEnum },
  { bg: string; trueBg: string; type: TileEnum; className: string }
> {
  constructor(props: { key: number; isDown: boolean; selectedType: TileEnum }) {
    super(props);
    this.state = {
      bg: "white",
      trueBg: "white",
      type: TileEnum.Default,
      className: "default-tile",
    };
  }

  changeColor() {

    if (this.props.selectedType !== this.state.type) {
      this.setState({ type: this.props.selectedType }, () => {
        switch (this.state.type) {
          case TileEnum.Default:
            this.setState({ className: "default-tile" });
            break;
          case TileEnum.Start:
            this.setState({ className: "start-tile" });
            break;
          case TileEnum.Goal:
            this.setState({ className: "goal-tile" });
            break;
          case TileEnum.Wall:
            this.setState({ className: "wall-tile" });
            break;
        }
      });
    }
  }

  handleMouseEnter() {
    if (this.props.isDown) {
      this.changeColor();
    }
  }

  render() {
    const className = this.state.className;
    return (
      <div
        className={className}
        onMouseDownCapture={this.changeColor.bind(this)}
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
