import mongoose from 'mongoose'
import ProfileSchema from '../models/Profile'
import BugSchema from '../models/Bug'
import NoteSchema from '../models/Note'

class DbContext {
  Bug = mongoose.model('Bug', BugSchema);
  Note = mongoose.model('Note', NoteSchema);
  Profile = mongoose.model('Profile', ProfileSchema);
}

export const dbContext = new DbContext()
