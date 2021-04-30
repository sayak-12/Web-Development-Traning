import mongoose from 'mongoose'

const Schema = mongoose.Schema

const noteSchema=new Schema({
    title:{
        type:String,
        default:null,
    },
    body:{
        type:String,
        required:true
    },
})

const Note = mongoose.model('Note',noteSchema)
export default Note;