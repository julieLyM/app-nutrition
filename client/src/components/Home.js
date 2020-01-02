import React, { Component } from "react";
import { brandSearch } from "../service/Data";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      brands: []
    };
  }

  componentDidMount() {
    this.submitBrand();
  }

  changeBrand = ({ target: { value: query } }) => {
    this.setState({
      query
    });
  };

  submitBrand = async () => {
    const data = await brandSearch(this.state.query);
  };

  render() {
    const { brands } = this.state;
    return (
      <div>
        <h1>Find a brand</h1>
        <input onChange={this.changeBrand} type="text" />
        <button onClick={this.submitBrand}>Search</button>
      </div>
    );
  }
}
