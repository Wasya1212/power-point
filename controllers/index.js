const mongoose = require('mongoose');
const path = require('path');

module.exports = class Controller {
  constructor(modelName) {
    let model;

    try {
      model = require(`../models/${modelName}`);
    } catch (e) {
      throw new Error(`Model ('${modelName}') in ${path.resolve(__dirname, `../models/${modelName}`)}, for controller not found!`);
    }

    if (!model || !model.collection) {
      throw new Error("Controller need mongoose model in constructor!");
    }

    this.name = `${model.collection.name}Controller`;
    this.model = model;
  }

  checkId(id) {
    return mongoose.Types.ObjectId.isValid(id.toString());
  }

  findOne(conditions = {}, selectFields = {}, options = {}) {
    return this.model.findOne(conditions, selectFields, options);
  }

  findById(id, selectFields = {}, options = {}) {
    return this.model.findById(id, selectFields, options);
  }

  findAll(selectFields = {}, options = {}) {
    return this.model.find({}, options).select(selectFields);
  }

  find(conditions = {}, selectFields = {}, options = {}) {
    return this.model.find(conditions, selectFields, options);
  }

  update() {

  }

  remove(conditions) {
    this.checkConditions(conditions);
    return this.model.deleteMany(conditions);
  }

  removeOne(conditions, options = {}) {
    this.checkConditions(conditions);
    return this.model.findOneAndRemove(conditions, options)
  }

  findByIdAndRemove(id, options) {
    return this.model.findByIdAndRemove(id, options);
  }

  findOneAndRemove(conditions, options = {}) {
    this.checkConditions(conditions);
    return this.model.findOneAndRemove(conditions, options)
  }

  removeAll() {
    return this.model.deleteMany();
  }

  checkConditions(conditions) {
    if (conditions == {} || !conditions) {
      throw new Error(404, "Conditions cannot be empty!");
    }
  }
}
