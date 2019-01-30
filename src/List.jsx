import React, { Component, Fragment } from "react";
import Info from "./Info";
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favourite: []
    };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add = propertyName => {
    const { favourite } = this.state;

    if (favourite.indexOf(propertyName) === -1) favourite.push(propertyName);

    this.setState({ favourite });
  };

  remove = itemName => {
    const { favourite } = this.state;

    const newFavList = favourite.filter(item => item !== itemName);

    this.setState({ favourite: newFavList });
  };

  render() {
    const traits = this.props.traits;

    const { favourite } = this.state;

    const toggleClassName = name => {
      const isFavourited = favourite.indexOf(name) >= 0;

      return isFavourited ? " glyphicon-heart" : " glyphicon-heart-empty";
    };

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <table className="table">
                <thead>
                  <tr>
                    <th>Fouvourite</th>
                    <th>Star Name</th>
                    <th />
                    <th>Characters</th>
                  </tr>
                </thead>
                <tbody>
                  {traits.map(property => (
                    <tr key={property.name}>
                      <td>
                        <p>
                          <span
                            class={`glyphicon ${toggleClassName(
                              property.name
                            )}`}
                          />
                        </p>
                      </td>
                      <td>
                        {property.name} <span>&nbsp;</span>
                      </td>
                      <td>
                        <p
                          className="btn btn-warning btn-xs"
                          onClick={() => this.add(property.name)}
                        >
                          Add{" "}
                        </p>
                      </td>
                      <td>
                        <Info Info={property} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <h3>List of favourites</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Star Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {favourite.map(propertyName => (
                    <tr key={propertyName}>
                      <td>
                        {propertyName} <span>&nbsp;</span>
                      </td>
                      <td>
                        <p
                          className="btn btn-danger btn-xs"
                          onClick={() => this.remove(propertyName)}
                        >
                          Remove
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default List;
