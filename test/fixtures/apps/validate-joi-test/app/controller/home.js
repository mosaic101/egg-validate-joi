'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.validateJoi.name;
  }

  async show() {
    const { ctx, app } = this;
    const { Joi } = app;
    const errors = ctx.validateJoi({
      params: {
        id: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
      },
    });
    if (errors) {
      ctx.body = errors;
      return;
    }
    const data = Object.assign({}, {
      params: ctx.params,
      query: ctx.query,
      body: ctx.request.body,
    });
    ctx.body = data;
  }

  async create() {
    const { ctx, app } = this;
    const { Joi } = app;
    const errors = ctx.validateJoi({
      body: {
        id: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
        name: Joi.string().required(),
        email: Joi.string().email().required(),
      },
    });
    if (errors) {
      ctx.body = errors;
      return;
    }
    const data = Object.assign({}, {
      params: ctx.params,
      query: ctx.query,
      body: ctx.request.body,
    });
    ctx.body = data;
  }

  async createTopic() {
    const { ctx, app } = this;
    const { Joi } = app;
    const errors = ctx.validateJoi({
      params: {
        id: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
      },
      body: {
        topicId: Joi.string().guid({ version: [ 'uuidv4' ] }).required(),
        name: Joi.string().required(),
      },
    });
    if (errors) {
      ctx.body = errors;
      return;
    }
    const data = Object.assign({}, {
      params: ctx.params,
      query: ctx.query,
      body: ctx.request.body,
    });
    ctx.body = data;
  }
}

module.exports = HomeController;

