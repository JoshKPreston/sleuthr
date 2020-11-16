import { AppState } from '../AppState'
import { api } from '../services/AxiosService'
import { logger } from '../utils/Logger'

class BugService {
  async getAll(query = {}) {
    try {
      const res = await api.get('api/bugs')
      AppState.bugs = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getOne(id) {
    try {
      const res = await api.get('api/bugs/' + id)
      logger.log(res.data)
      AppState.bug = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async create(newBug) {
    try {
      const res = await api.post('api/bugs', newBug)
      AppState.bugs = [...AppState.bugs, res.data]
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async edit(bug) {
    try {
      const res = await api.put('api/bugs/' + bug._id, bug)
      logger.log(res.data)
      const index = AppState.bugs.findIndex(b => b._id === bug._id)
      AppState.bugs.splice(index, 1, bug)
    } catch (error) {
      logger.error(error)
    }
  }

  async editBugStatus(bug) {
    try {
      const res = await api.put('api/bugs/' + bug._id, bug)
      logger.log(res.data)
      const index = AppState.bugs.findIndex(b => b._id === bug._id)
      AppState.bugs.splice(index, 1, bug)
    } catch (error) {
      logger.error(error)
    }
  }

  async archiveBug(bug) {
    try {
      const res = await api.put('api/bugs/' + bug._id, bug)
      logger.log(res.data)
      const index = AppState.bugs.findIndex(b => b._id === bug._id)
      AppState.bugs.splice(index, 1)
      AppState.archive = [...AppState.archive, bug]
    } catch (error) {
      logger.error(error)
    }
  }
}

export const bugService = new BugService()
