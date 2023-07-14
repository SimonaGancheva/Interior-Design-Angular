const { projectModel } = require('../models');

function getProjects(req, res, next) {
    projectModel.find({}).lean()
        // .populate('userId')
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next);
}

function getProject(req, res, next) {
    const { projectId } = req.params;

    projectModel.findById(projectId)
        // .populate({
        //     path : 'posts',
        //     populate : {
        //       path : 'userId'
        //     }
        //   })
        .then(project => res.json(project))
        .catch(next);
}

function newProject(userId, title, architect, client, terms, type, style, date, description, location) {
    return projectModel.create({ userId, title, architect, client, terms, type, style, date, description, location })
    // TODO save if necessary
    // .save();
        // .then(post => {
        //     return Promise.all([
        //         userModel.updateOne({ _id: userId }, { $push: { posts: post._id }, $addToSet: { themes: themeId } }),
        //         themeModel.findByIdAndUpdate({ _id: themeId }, { $push: { posts: post._id }, $addToSet: { subscribers: userId } }, { new: true })
        //     ])
        // })
}

function createProject(req, res, next) {
    const { _id: userId } = req.user;
    const { title, architect, client, terms, type, style, date, description, location } = req.body;

    newProject(userId, title, architect, client, terms, type, style, date, description, location)
        // .then(([_, updatedTheme]) => res.status(200).json(updatedTheme))
        // .catch(next);
}

function editProject(req, res, next) {
    const { _id: userId } = req.user;
    const { title, architect, client, terms, type, style, date, description, location } = req.body;

    // if the userId is not the same as this one of the post, the post will not be updated
    postModel.findOneAndUpdate({ _id: postId, userId }, { title, architect, client, terms, type, style, date, description, location }, { new: true })
        .then(updatedPost => {
            if (updatedPost) {
                res.status(200).json(updatedPost);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function deleteProject(req, res, next) {
    const { projectId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        projectModel.findOneAndDelete({ _id: postId, userId }),
        // userModel.findOneAndUpdate({ _id: userId }, { $pull: { posts: postId } }),
        
    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
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
    getProjects,
    createProject,
    getProject,
    editProject,
    deleteProject,
    // subscribe,
}
