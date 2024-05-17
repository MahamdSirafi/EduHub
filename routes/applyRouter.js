const applayController = require('../controllers/applyController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const applymid = require('./../middlewares/applymid');
const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/mine')
  .get(
    authMiddlewers.restrictTo('user'),
    dynamicMiddleware.addQuery('user', 'userId'),
    applayController.getAllapplay
  );

router
  .route('/')
  .get(
    authMiddlewers.restrictTo('admin', 'teacher'),
    applayController.getAllapplay
  )
  .post(
    authMiddlewers.restrictTo('user'),
    dynamicMiddleware.addVarBody('user', 'userId'),
    applayController.createapplay
  );
router
  .route('/:id')
  .get(applayController.getapplay)
  .patch(
    authMiddlewers.restrictTo('teacher'),
    applymid.tasneem,
    applayController.updateapplay
  )
  .delete(authMiddlewers.restrictTo('teacher'), applayController.deleteapplay);
router.route('/:id/setRsult').patch(applayController.updateapplay);
module.exports = router;
