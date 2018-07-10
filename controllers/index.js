const mongoose = require('mongoose');

module.exports = class Controller {
  constructor(model) {
    if (!model || !model.collection.name) {
      throw new Error(404, "Controller need mongoose model in constructor!");
    }
    this.name = model.collection.name;
    this.model = model;
  }

  static checkId(id) {
    return mongoose.Types.ObjectId.isValid(id.toString());
  }

  static findOne(conditions = {}, selectFields = {}, options = {}) {
    return this.model.findOne(conditions, selectFields, options);
  }

  static findById(id, selectFields = {}, options = {}) {
    return this.model.findById(id, selectFields, options);
  }

  static findAll(selectFields = {}, options = {}) {
    return this.model.find({}, options).select(selectFields);
  }

  static find(conditions = {}, selectFields = {}, options = {}) {
    return this.model.find(conditions, selectFields, options);
  }

  static update() {

  }

  static remove(conditions) {
    this.checkFields(conditions);
    return this.model.deleteMany(conditions);
  }

  static removeOne(conditions, options = {}) {
    this.checkFields(conditions);
    return this.model.findOneAndRemove(conditions, options)
  }

  static findByIdAndRemove(id, options) {
    return this.model.findByIdAndRemove(id, options);
  }

  static findOneAndRemove(conditions, options = {}) {
    this.checkFields(conditions);
    return this.model.findOneAndRemove(conditions, options)
  }

  static removeAll() {
    return this.model.deleteMany();
  }

  checkFields(conditions) {
    if (conditions == {} || !conditions) {
      throw new Error(404, "Conditions cannot be empty!");
    }
  }
}
