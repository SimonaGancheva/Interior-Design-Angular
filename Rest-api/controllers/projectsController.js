const { projectModel, userModel } = require("../models");

// function getProjects(req, res, next) {
//     projectModel.find({}).lean()
//         .populate('userId')
//         .then(projects => {
//             res.status(200).json(projects)
//         })
//         .catch(next);
// }

function getLatestsProjects(req, res, next) {
  const limit = Number(req.query.limit) || 0;

  projectModel
    .find()
    .sort({ created_at: -1 })
    .limit(limit)
    .populate("userId")
    .then((porjects) => {
      res.status(200).json(porjects);
    })
    .catch(next);
}

function getProject(req, res, next) {
  const { projectId } = req.params;

  projectModel
    .findById(projectId)
    .populate("userId")
    .then((project) => res.json(project))
    .catch(next);
}

function newProject(
  userId,
  title,
  architect,
  client,
  terms,
  type,
  style,
  date,
  description,
  location,
  mainImageUrl,
  imageUrl2,
  imageUrl3
) {
  return projectModel.create({
    userId,
    title,
    architect,
    client,
    terms,
    type,
    style,
    date,
    description,
    location,
    mainImageUrl,
    imageUrl2,
    imageUrl3,
  })
  // .save()
  .then(project => {
      return Promise.all([
          userModel.updateOne({ _id: userId }, { $push: { projects: project._id }})
      ])
  })
}

function createProject(req, res, next) {
  const { _id: userId } = req.user;
  const {
    title,
    architect,
    client,
    terms,
    type,
    style,
    date,
    description,
    location,
    mainImageUrl,
    imageUrl2,
    imageUrl3,
  } = req.body;

  newProject(
    userId,
    title,
    architect,
    client,
    terms,
    type,
    style,
    date,
    description,
    location,
    mainImageUrl,
    imageUrl2,
    imageUrl3
  );
  // .then(([_, updatedTheme]) => res.status(200).json(updatedTheme))
  // .catch(next);
}

function editProject(req, res, next) {
  const { _id: userId } = req.user;
  const {
    title,
    architect,
    client,
    terms,
    type,
    style,
    date,
    description,
    location,
    mainImageUrl,
    imageUrl2,
    imageUrl3,
  } = req.body;

  // if the userId is not the same as this one of the project, the project will not be updated
  projectModel
    .findOneAndUpdate(
      { _id: postId, userId },
      {
        title,
        architect,
        client,
        terms,
        type,
        style,
        date,
        description,
        location,
        mainImageUrl,
        imageUrl2,
        imageUrl3,
      },
      { new: true }
    )
    .then((updatedProject) => {
      if (updatedProject) {
        res.status(200).json(updatedProject);
      } else {
        res.status(401).json({ message: `Not allowed!` });
      }
    })
    .catch(next);
}

function deleteProject(req, res, next) {
  const { projectId } = req.params;
  const { _id: userId } = req.user;

  Promise.all([
    projectModel.findOneAndDelete({ _id: projectId, userId }),
    userModel.findOneAndUpdate({ _id: userId }, { $pull: { posts: postId } }),
  ])
    .then(([deletedOne, _, __]) => {
      if (deletedOne) {
        res.status(200).json(deletedOne);
      } else {
        res.status(401).json({ message: `Not allowed!` });
      }
    })
    .catch(next);
}

// function subscribe(req, res, next) {
//     const themeId = req.params.themeId;
//     const { _id: userId } = req.user;
//     projectModel.findByIdAndUpdate({ _id: themeId }, { $addToSet: { subscribers: userId } }, { new: true })
//         .then(updatedTheme => {
//             res.status(200).json(updatedTheme)
//         })
//         .catch(next);
// }

module.exports = {
  getLatestsProjects,
  createProject,
  getProject,
  editProject,
  deleteProject,
  // subscribe,
};
