import React, { Component } from 'react';
import {
  ButtonGroup,
  Button,
  Colors
} from 'react-foundation';

class AppProject extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-container">
        <div className="content">
          <img src="https://i.ytimg.com/vi/QF9kG8QTgVI/maxresdefault.jpg" alt="slide" />
          <div className="project-description">
            <p className="text">Some example presentation project description...</p>
            <ButtonGroup isExpanded>
              <Button color={Colors.SECONDARY}>Edit</Button>
              <Button color={Colors.SUCCESS}>Open</Button>
            </ButtonGroup>
          </div>
        </div>
        <footer>
          <h5 className="project-title">Some project</h5>
          <p className="project-pages pages-count"><span>Pages</span>35</p>
          <div className="project-date">
            <p className="updatedAt"><span>last update</span><span>12.07.2018</span></p>
            <p className="createdAt"><span>create date</span><span>12.07.2018</span></p>
          </div>
        </footer>
      </div>
    );
  }
}

export default AppProject;
