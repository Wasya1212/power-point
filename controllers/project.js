const mongoose = require('mongoose');
const Controller = require('./index');

class ProjectController extends Controller {
  constructor() {
    super('project');
  }

  save(saveConditions) {
    this.checkConditions(saveConditions);

    const newProject = new ProjectModel({
      name: saveConditions.name,
      description: saveConditions.description,
      slides: []
    });

    return newProject.save();
  }
}

module.exports = Project = new ProjectController();
