import React, { Component } from 'react';
import Foundation, { Button, Colors } from 'react-foundation';
import 'foundation-sites/dist/css/foundation.min.css';

class AppNavbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button color={Colors.SUCCESS}>Save</Button>
    )
  }
}

export default AppNavbar;
