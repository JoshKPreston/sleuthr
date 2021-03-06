// All Notes will have a title, description, who reported the Note, closedDate and whether or not it has been closed.

import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Note = new Schema(
  {
    bugId: { type: ObjectId, ref: 'Bug', required: true },
    message: { type: String, required: false, default: '' },
    creatorEmail: { type: String, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Note.virtual('creator', {
  localField: 'creatorEmail',
  ref: 'Profile',
  foreignField: 'email',
  justOne: true
})
Note.virtual('bug', {
  localField: 'bugId',
  ref: 'Bug',
  foreignField: '_id',
  justOne: true
})

export default Note

// var note = new Schema({
//   content: String,
//   bug: ObjectId,
//   reportedBy: String, //The provided name for who made the note
// }, { timestamps: true, toJSON: { virtuals: true } })
