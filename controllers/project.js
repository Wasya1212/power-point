const mongoose = require('mongoose');
const Controller = require('./index');
const ProjectModel = require('../models/project');

class ProjectController extends Controller {
  constructor(name) {
    super(ProjectModel);
    this.name = name;
  }

  static create(fields) {
    this.checkFields(fields);

    const newProject = new ProjectModel({
      name: fields.name,
      description: fields.description,
      slides: []
    });

    return newProject.save();
  }
}

// console.log(new ProjectController('Project'))

module.exports = Project = new ProjectController('Project');
