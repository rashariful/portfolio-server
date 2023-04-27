const { createProjectService, getAllProjectService, getProjectByIdService, updateProjectService, deleteProjectService } = require("../services/project.services")

exports.createProject = async(req, res)=>{
    try {
        const data = await createProjectService(req.body)
        res.status(200).json({
            status: "success",
            message: "create project successfull",
            data: data
        })  
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't create project",
            error: error.message
        })
    }
}
exports.getProject = async(req, res)=>{
    try {
        const data = await getAllProjectService()
        res.status(200).json({
            status: "success",
            message: "get all project successfull",
            data: data
        })  
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "no project found",
            error: error.message
        })
    }
}
exports.getProjectById = async(req, res)=>{
    try {
        const {id} = req.params
        const data = await getProjectByIdService(id)
        res.status(200).json({
            status: "success",
            message: "get project by id successfull",
            data: data
        })  
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "no project found",
            error: error.message
        })
    }
}
exports.updateProject = async(req, res)=>{
    try {
        const {id} = req.params
        const data = await updateProjectService(id, req.body)
        res.status(200).json({
            status: "success",
            message: "update project successfull",
            data: data
        })  
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't update project",
            error: error.message
        })
    }
}
exports.deleteProject = async(req, res)=>{
    try {
        const {id} = req.params
        const data = await deleteProjectService(id)
        res.status(200).json({
            status: "success",
            message: "delete project successfull",
            data: data
        })  
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't delete project",
            error: error.message
        })
    }
}