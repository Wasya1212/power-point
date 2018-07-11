const mongoose = require('mongoose');
// const Controller = require('./index');
const ProjectModel = require('../models/project');

class Controller {
  constructor(model) {
    console.log("Controller constructor", model);
    if (!model || !model.collection.name) {
      throw new Error(404, "Controller need mongoose model in constructor!");
    }
    this.name = model.collection.name;
    this.model = model;
  }

  static checkId(id) {
    return mongoose.Types.ObjectId.isValid(id.toString());
  }
}

class ProjectController extends Controller {
  constructor(name, model) {
    super(model)
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

module.exports = Project = new ProjectController('Project', ProjectModel);
