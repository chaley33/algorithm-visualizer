import React from "react";

export enum TileEnum {
  Default,
  Start,
  Goal,
  Wall,
}

export default class Tile extends React.Component<
  { key: number; isDown: boolean, type: TileEnum },
  { bg: string; trueBg: string }
> {
  constructor(props: { key: number; isDown: boolean; type: TileEnum }) {
    super(props);
    this.state = {
      bg: "white",
      trueBg: "white",
    };
  }

  changeColor() {
    let newTrueBg = this.state.trueBg === "white" ? "black" : "white";

    this.setState(
      {
        trueBg: newTrueBg,
      },
      () => {
        this.handleHover();
      }
    );
  }

  handleMouseEnter() {
    this.handleHover();

    if (this.props.isDown) {
      this.changeColor();
    }
  }

  handleHover() {
    let hoverColor = this.state.trueBg === "white" ? "#999" : "#333";

    this.setState({
      bg: hoverColor,
    });
  }

  handleMouseLeave() {
    this.setState({ bg: this.state.trueBg });
  }

  render() {
    return (
      <div
        className="Tile"
        onMouseDownCapture={this.changeColor.bind(this)}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
        style={{ background: this.state.bg }}
      ></div>
    );
  }
}
