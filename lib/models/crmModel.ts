import * as mongoose from 'mongoose';
import * as validator from 'validator';



const Schema = mongoose.Schema;


export const ContactSchema = new Schema({
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
})