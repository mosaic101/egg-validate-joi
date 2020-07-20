import * as Joi from 'joi';

declare module 'egg' {

  interface Application {
    Joi: typeof Joi
  }

}
