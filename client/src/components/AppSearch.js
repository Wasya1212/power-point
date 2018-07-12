import React, { Component } from 'react';

class AppSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.getData(this.state.searchText);
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({ searchText: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Search..." onChange={this.handleChange}/>
      </form>
    );
  }
}

export default AppSearch;
