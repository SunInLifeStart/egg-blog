'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  if (controller.default) {
    router.get('/default/index', controller.default.default.index);
  }
};
