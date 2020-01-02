import React, { Component } from "react";
import { brandSearch } from "../service/Data";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  changeBrand = ({ target: { value: query } }) => {
    this.setState({
      query
    });
  };

  submitBrand = async () => {
    const data = await brandSearch();
    return data;
  };

  render() {
    return (
      <div>
        <h1>Find a brand</h1>
        <input onChange={this.changeBrand} />
        <button onClick={this.submitBrand}>Search</button>
      </div>
    );
  }
}
