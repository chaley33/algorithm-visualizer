import React from "react";

export default class Board extends React.Component<
  { isDown: boolean, mouseDown: (down: boolean) => void },
  { count?: number; }
> {
  constructor(props: { isDown: boolean, mouseDown: (down: boolean) => void }) {
    super(props);
    this.state = {
      count: 0
    };
  }

  renderSquare(i: number) {
    return <Tile key={i} isDown={this.props.isDown} />;
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

export class Tile extends React.Component<
  { key: number; isDown: boolean },
  { bg: string; trueBg: string }
> {
  constructor(props: { key: number; isDown: boolean }) {
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