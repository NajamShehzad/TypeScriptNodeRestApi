import * as mongoose from 'mongoose';



const Schema = mongoose.Schema;


export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type:String
    },
    createdDate:{
        type:Date,
        default: Date.now()
    }
})