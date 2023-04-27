const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    description: {
        type: String,
        required: true,

    },
    category: {
        type: String,
        required: true,
    },
    liveLInk: {
        type: String,
        
    },
    clientLink: {
        type: String,
        
    },
    serverLink: {
        type: String,
       
    },

    images: {
        type: Array,
    },
},
    {
        timestamps: true
    }
);

//Export the model
module.exports = mongoose.model('Project', projectSchema);