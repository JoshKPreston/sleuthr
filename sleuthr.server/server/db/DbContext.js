import mongoose from 'mongoose'
import ProfileSchema from '../models/Profile'
import BugSchema from '../models/Bug'
import NoteSchema from '../models/Note'

class DbContext {
  Bug = mongoose.model('bug', BugSchema);
  Note = mongoose.model('note', NoteSchema);
  Profile = mongoose.model('profile', ProfileSchema);
}

export const dbContext = new DbContext()
