import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { logger } from '../utils/Logger'

class BugService {
  async find(query = {}) {
    try {
      return await dbContext.Bug.find(query)
    } catch (error) {
      logger.error(error)
      throw new BadRequest('Server BugService.js failed at method: find()')
    }
  }

  async findById(id) {
    const bug = await dbContext.Bug.findById(id)
    if (!bug) {
      throw new BadRequest('Invalid Id')
    }
    return bug
  }

  async create(bug) {
  }
}

export const bugService = new BugService()
