'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/',controller.banner.index);
  router.get('/login',controller.login.index);
  router.get('/state', controller.state.index);
  router.get('/details', controller.details.index);
  router.get('/state', controller.state.index);
  router.get('/add', controller.add.index);
  router.get('/alarmrecord', controller.alarmrecord.index);
  router.get('/homepage', controller.homepage.index);
  router.get('/my',controller.my.index);
  router.get('/openingrecord',controller.openingrecord.index);
  router.get('/associatedusers',controller.associatedusers.index);
  router.get('/password',controller.password.index);
  router.get('/register',controller.register.index);

};
