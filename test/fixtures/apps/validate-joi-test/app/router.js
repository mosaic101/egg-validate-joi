'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/:id', controller.home.show);
  router.post('/', controller.home.create);
  router.post('/:id/topics', controller.home.createTopic);
};
