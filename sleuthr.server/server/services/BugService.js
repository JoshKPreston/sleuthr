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
    try {
      const bug = await dbContext.Bug.findById(id)
      if (!bug) { throw new BadRequest('Invalid Id') }
      return bug
    } catch (error) {
      logger.error(error)
    }
  }

  async create(newBug) {
    try {
      if (dbContext.Bug.findOne({ title: newBug.title })) {
        throw new BadRequest('There is already a bug by this title')
      }
      return await dbContext.Bug.create(newBug)
    } catch (error) {
      logger.error(error)
    }
  }

  async edit(bug) {
    try {
      if (!dbContext.Bug.findOne({ title: bug.title })) {
        throw new BadRequest(`Could not find bug with title: "${bug.title}"`)
      } else {
        return await dbContext.Bug.findByIdAndUpdate(bug._id, bug)
      }
    } catch (error) {
      logger.error(error)
    }
  }

  async close(bug) {
    try {
      if (!dbContext.Bug.findById(bug.id)) {
        throw new BadRequest(`Could not find bug with title: "${bug.title}"`)
      } else {
        return await dbContext.Bug.findByIdAndUpdate(bug._id, bug)
      }
    } catch (error) {
      logger.error(error)
    }
  }
}

export const bugService = new BugService()
