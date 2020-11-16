// All bugs will have a title, description, who reported the bug, closedDate and whether or not it has been closed.

import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Bug = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorEmail: { type: String, ref: 'Profile', required: true },
    closed: { type: Boolean, default: false },
    archived: { type: Boolean, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Bug.virtual('creator', {
  localField: 'creatorEmail',
  ref: 'Profile',
  foreignField: 'email',
  justOne: true
})

export default Bug

// var bug = new Schema({
//   closed: Boolean
//   description: String,
//   title: String,
//   reportedBy: String, //The provided name for who reported the bug
//   closedDate: Date
// }, { timestamps: true, toJSON: { virtuals: true } })
