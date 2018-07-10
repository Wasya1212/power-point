const router = require('express').Router();
const mongoose = require('mongoose');
// Project model
// const Project = require('../models/project');
const Project = require('../controllers/project');

// @routes
router
  .route('/:id')
  .all((req, res, next) => {
    if (!Project.checkId(req.params.id)) {
      next(new Error(404, "Wrong project id"));
    } else {
      next();
    }
  })
  .get((req, res, next) => {
    Project.findById(req.params.id)
      .then(project => res.json(project));
  })
// router
//   .route('/:id')
//   .all((req, res, next) => {
//     if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
//       next(new Error(404, "Wrong project id"));
//     } else {
//       next();
//     }
//   })
//   .get((req, res, next) => {
//     Project.findById(req.params.id)
//       .select({})
//       .then(project => res.json(project));
//   })
//   .put((req, res, next) => {
//     Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
//       .then(project => res.json(project));
//   })
//   .delete((req, res, next) => {
//     Project.findByIdAndRemove(req.params.id)
//       .then(project => res.json(project));
//   })
//   .post((req, res, next) => {
//     next(new Error("not implemented!"));
//   });
//
// router.get('/', (req, res, next) => {
//   Project.find()
//     .sort({ date: -1 })
//     .then(projects => res.json(projects))
//     .catch(next);
// });
//
// router.post('/', (req, res, next) => {
//     const newProject = new Project({
//       name: req.body.name,
//       description: req.body.description,
//       slides: []
//     });
//
//     newProject
//       .save()
//       .then(project => res.json(project))
//       .catch(next);
//   });

module.exports = router;
