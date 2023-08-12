const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { projectsController } = require('../controllers');
const  cors  = require('cors');

// middleware that is specific to this router

// router.get("/", projectsController.getProjects);
router.get('/', projectsController.getLatestsProjects);
router.post('/', auth(), projectsController.createProject);

router.get('/:projectId', projectsController.getProject);
router.post('/:projectId', auth(), projectsController.createProject);
router.put('/:projectId', auth(), projectsController.editProject);
router.delete('/:projectId', cors(), auth(), projectsController.deleteProject);

module.exports = router;
