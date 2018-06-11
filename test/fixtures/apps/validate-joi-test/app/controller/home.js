'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    try {
      const { ctx, app } = this;
      const { Joi } = app;
      ctx.validateJoi({
        params: {
          id: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
        },
      }, ctx);
      console.log(12312321);
      this.ctx.body = 'hi, ' + this.app.plugins.validateJoi.name;
    } catch (err) {
      console.log(12312312, err.message);
      this.ctx.body = 'hi, ' + this.app.plugins.validateJoi.name;
    }
  }
}

module.exports = HomeController;

