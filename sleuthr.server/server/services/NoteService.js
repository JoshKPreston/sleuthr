import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { logger } from '../utils/Logger'

class NoteService {
  async getAll(query = {}) {
    try {
      return await dbContext.Note.find(query)
    } catch (error) {
      logger.error(error)
      throw new BadRequest('Server NoteService.js failed at method: find()')
    }
  }

  async findById(id) {
    const note = await dbContext.Note.findById(id)
    if (!note) {
      throw new BadRequest('Invalid Id')
    }
    return note
  }

  async create(newNote) {
    try {
      // if (dbContext.Bug.find({ title: newBug.title })) {
      //   throw new BadRequest('There is already a bug by this title')
      // }
      return await dbContext.Note.create(newNote)
    } catch (error) {
      logger.error(error)
      throw new BadRequest(error)
    }
  }

  async edit(noteId, newNote) {
    try {
      // if (dbContext.Bug.find({ title: newBug.title })) {
      //   throw new BadRequest('There is already a bug by this title')
      // }
      return await dbContext.Note.findByIdAndUpdate(noteId, newNote, { new: true })
    } catch (error) {
      logger.error(error)
      throw new BadRequest(error)
    }
  }

  async delete(noteId) {
    try {
      return await dbContext.Note.findByIdAndDelete(noteId)
    } catch (error) {
      logger.error(error)
      throw new BadRequest(error)
    }
  }
}

export const noteService = new NoteService()
