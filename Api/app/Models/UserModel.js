
const mongoose = require('mongoose')
const { isEmail } = require('validator')

const User = mongoose.model(
    "User",
    new mongoose.Schema({

        full_name: {
            type: String,
            required: [true, 'Please add a first name'],
        },

        email: {
            type: String,
            required: [true, 'Please add a email'],
            trim: true,
            lowercase: true,
            unique: true,
            validate: [isEmail, 'Please add a valid email']
        },

        password: {
            type: String,
            required: [true, 'Please add a password'],
            minlength: [8, 'Minimum password length is 8 characters']
        },
        
    })
);

module.exports = User;