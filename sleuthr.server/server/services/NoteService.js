import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { logger } from '../utils/Logger'

class NoteService {
  async find(query = {}) {
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

  async create(note) {
  }
}

export const noteService = new NoteService()
