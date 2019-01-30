import React, { Component } from "react";
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ expanded: !this.state.expanded });
  }
  close() {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    const Info = this.props.Info;

    if (!this.state.expanded) {
      return (
        <p className="btn btn-info btn-sm" onClick={this.open}>
          show info
        </p>
      );
    }

    return (
      <div className="user-details">
        <ul class="list-group list-group-flush">
          <li class="list-group-item list-group-item-info">
            Gender: {Info.gender}
          </li>
          <li class="list-group-item list-group-item-info">
            Height: {Info.height}
          </li>
          <li class="list-group-item list-group-item-info">
            Mass: {Info.mass}
          </li>
          <li class="list-group-item list-group-item-info">
            Color: {Info.hair_color}
          </li>
        </ul>
        <p className="btn btn-primary btn-sm" onClick={this.close}>
          {" "}
          Hide info{" "}
        </p>
      </div>
    );
  }
}
export default Info;
