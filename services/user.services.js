const User = require("../model/userModels")

exports.createUserService = async(userInfo)=>{
    const user = await User.create(userInfo)
    return user
}
exports.loginUserService = async(email)=>{
    const user = await User.findOne({email})
    return user
}
exports.getUserService = async()=>{
    const user = await User.find({})
    return user
}