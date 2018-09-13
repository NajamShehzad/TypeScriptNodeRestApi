"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;
exports.ContactSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
});
//# sourceMappingURL=crmModel.js.map