import React, { Component } from 'react';
import {
  Row,
  Column,
  ButtonGroup,
  Link,
  Colors,
  Pagination,
  PaginationPrevious,
  PaginationNext,
  PaginationItem,
  PaginationEllipsis,
  Inline
} from 'react-foundation';

import AppProject from '../components/AppProject';

import blockIcon from '../table2.svg';
import listIcon from '../paragraph-justify.svg';

const Projects = ['project 1', 'project 2', 'project 3', 'project 4', 'project 5', 'project 6'];

class AppProjectContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectViewType: 'block',
      projectSortType: 'all'
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

  changeAllProjectSort = () => {
    this.setState({
      projectSortType: 'all'
    });
  }

  changeLatestProjectSort = () => {
    this.setState({
      projectSortType: 'latest'
    });
  }

  changeViewedProjectSort = () => {
    this.setState({
      projectSortType: 'viewed'
    });
  }

  handleSort = () => {
    this.props.getSort(this.state.projectSortType);
  }

  render() {
    return (
      <div className="projects-container__content">
        <Row isColumn>
          <header>
            <h3>Projects
              <small current={(this.state.projectSortType == 'all').toString()} onClick={this.changeAllProjectSort}>all presentations</small>
              <small current={(this.state.projectSortType == 'latest').toString()} onClick={this.changeLatestProjectSort}>latest</small>
              <small current={(this.state.projectSortType == 'viewed').toString()} onClick={this.changeViewedProjectSort}>most viewed</small>
            </h3>
          </header>
        </Row>
        <Row isColumn className="projects-view-control">
          <ButtonGroup>
            <Link color={Colors.SECONDARY} className="block-view-btn" isDisabled={this.state.projectViewType == 'block'} onClick={this.changeBlockProjectView}>
              <img src={blockIcon} alt="block view" />
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
      </div>
    );
  }
}

class Frontpage extends Component {
  render() {
    return (
      <main className="main main-content">
        <section className="projects-container">
          <AppProjectContainer />
        </section>
        <section className="pagination-container">
          <Pagination arial-label="Pagination" isCentered>
            <PaginationPrevious isDisabled>Previous <Inline showForSr>page</Inline></PaginationPrevious>
            <PaginationItem isCurrent><Inline showForSr>You're on page</Inline> 1</PaginationItem>
            <PaginationItem><a aria-label="Page 2">2</a></PaginationItem>
            <PaginationItem><a aria-label="Page 3">3</a></PaginationItem>
            <PaginationItem><a aria-label="Page 4">4</a></PaginationItem>
            <PaginationEllipsis />
            <PaginationItem><a aria-label="Page 12">12</a></PaginationItem>
            <PaginationNext><a aria-label="Next page">Next <Inline showForSr>page</Inline></a></PaginationNext>
          </Pagination>
        </section>
      </main>
    );
  }
}

export default Frontpage;
