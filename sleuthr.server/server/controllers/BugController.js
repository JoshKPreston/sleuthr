import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugService } from '../services/BugService'

export class BugController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
    // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getOne)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.edit)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await bugService.getAll(req.body))
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      return res.send(await bugService.getOne(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email
      return res.send(await bugService.create(req.body))
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorEmail = req.userInfo.email
      return res.send(await bugService.edit(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
}
