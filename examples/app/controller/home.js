'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }

  async show() {
    const { ctx, app } = this;
    const { Joi } = app;
    console.log(ctx.validateJoi);
    try {
      ctx.validateJoi({
        params: {
          id: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
        },
      });
      const data = Object.assign({}, {
        params: ctx.params,
        query: ctx.query,
        body: ctx.request.body,
      });
      ctx.body = data;
    } catch (err) {
      ctx.body = JSON.parse(err.message);
    }
  }
}

module.exports = HomeController;
