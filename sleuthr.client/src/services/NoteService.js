import { AppState } from '../AppState'
import { api } from './AxiosService'
import { logger } from '../utils/Logger'

class NoteService {
  async getAll(bugId) {
    try {
      const res = await api.get('api/bugs/' + bugId + '/notes')
      AppState.notes = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getOne(bug, note) {
    try {
      const res = await api.get('api/bugs/' + bug._id + '/notes' + note._id)
      logger.log(res.data)
      AppState.note = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async create(newNote) {
    try {
      const res = await api.post('api/bugs/' + newNote.bugId + '/notes', newNote)
      AppState.notes = [...AppState.notes, res.data]
      logger.log(res.data)
    } catch (error) {
      logger.error(error)
    }
  }

  async edit(bug, note) {
    try {
      const res = await api.put('api/bugs/' + bug._id + '/notes/' + note._id, note)
      logger.log(res.data)
      const index = AppState.notes.findIndex(n => n._id === note._id)
      AppState.notes.splice(index, 1, note)
    } catch (error) {
      logger.error(error)
    }
  }

  async delete(bug, note) {
    try {
      const res = await api.delete('api/bugs/' + bug._id + '/notes/' + note._id)
      logger.log(res.data)
      const index = AppState.notes.findIndex(n => n._id === note._id)
      AppState.notes.splice(index, 1)
    } catch (error) {
      logger.error(error)
    }
  }
}

export const noteService = new NoteService()
