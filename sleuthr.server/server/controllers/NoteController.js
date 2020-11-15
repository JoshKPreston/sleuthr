import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class NoteController extends BaseController {
  constructor() {
    super('api/notes')
    this.router
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .post('', this.create)
      .put('', this.create)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await req.body)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email
      return res.send(await req.body)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email
      return res.send(await req.body)
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email
      return res.send(await req.body)
    } catch (error) {
      next(error)
    }
  }
}
