const Project = require("../model/projectModel")

exports.createProjectService = async(data)=>{
    return result = await Project.create(data)
}
exports.getAllProjectService = async()=>{
    return result = await Project.find({})
}
exports.getProjectByIdService = async(id)=>{
    return result = await Project.findOne({_id: id})
}
exports.updateProjectService = async(id, data)=>{
    return result = await Project.updateOne({_id: id},{$set: data})
}
exports.deleteProjectService = async(id)=>{
    return result = await Project.deleteOne({_id: id})
}