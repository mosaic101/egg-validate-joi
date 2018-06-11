'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/:id', controller.home.index);
};
