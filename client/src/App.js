import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import AppProject from './components/AppProject';
import 'foundation-sites/dist/css/foundation.min.css';
import 'foundation-sites/dist/css/foundation-float.min.css';
import './App.css';
import './theme.css';
import blockIcon from './paragraph-justify.svg';
import listIcon from './table2.svg';
import {
  Row,
  Column,
  ButtonGroup,
  Link,
  Colors
} from 'react-foundation';

const Projects = ['project 1', 'project 2', 'project 3', 'project 4', 'project 5', 'project 6'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectViewType: 'block'
    };
  }

  changeBlockProjectView = () => {
    if (this.state.projectViewType == 'block') {
      return;
    }

    this.setState({
      projectViewType: 'block'
    });
  }

  changeListProjectView = () => {
    if (this.state.projectViewType == 'list') {
      return;
    }

    this.setState({
      projectViewType: 'list'
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-navigation">
          <header className="header">
            <AppNavbar />
          </header>
        </div>
        <div className="App-content">
          <main className="main main-content">
            <section className="projects-container">
              <Row isColumn>
                <header>
                  <h3>Projects / <small>all presentations</small></h3>
                </header>
              </Row>
              <Row isColumn className="projects-view-control">
                <ButtonGroup>
                  <Link color={Colors.SECONDARY} className="block-view-btn" isDisabled={this.state.projectViewType == 'block'} onClick={this.changeBlockProjectView}>
                    <img src={blockIcon} alt="list view" />
                  </Link>
                  <Link color={Colors.SECONDARY} className="list-view-btn" isDisabled={this.state.projectViewType == 'list'} onClick={this.changeListProjectView}>
                    <img src={listIcon} alt="list view" />
                  </Link>
                </ButtonGroup>
              </Row>
              <Row className="projects-list align-spaced">
                {Projects.map(project => {
                  return (
                    <Column large={4} medium={4}>
                      <div className="container">
                        <AppProject />
                      </div>
                    </Column>
                  );
                })}
              </Row>
            </section>
          </main>
        </div>
        <div className="App-contacts">
          <footer className="footer">
            <span>Copyright 2018</span>
          </footer>
        </div>
    </div>
    );
  }
}

export default App;
