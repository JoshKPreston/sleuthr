import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'
import { logger } from '../utils/Logger'

class BugService {
  async getAll(query = {}) {
    try {
      return await dbContext.Bug.find(query)
    } catch (error) {
      logger.error(error)
      throw new BadRequest(error)
      // throw new BadRequest('Server BugService.js failed at method: find()')
    }
  }

  async getOne(id) {
    try {
      const bug = await dbContext.Bug.findOne({ _id: id })
      if (!bug) { throw new BadRequest('Invalid Id') }
      return bug
    } catch (error) {
      logger.error(error)
    }
  }

  async create(newBug) {
    try {
      // if (dbContext.Bug.find({ title: newBug.title })) {
      //   throw new BadRequest('There is already a bug by this title')
      // }
      return await dbContext.Bug.create(newBug)
    } catch (error) {
      logger.error(error)
      throw new BadRequest(error)
    }
  }

  async edit(id, bug) {
    try {
      if (!dbContext.Bug.findById(bug.id)) {
        throw new BadRequest(`Could not find bug with title: "${bug.title}"`)
      } else {
        return await dbContext.Bug.findByIdAndUpdate(id, bug, { new: true })
      }
    } catch (error) {
      logger.error(error)
    }
  }
}

export const bugService = new BugService()
