const courseController = require('../controllers/courseController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
const applymid = require('./../middlewares/applymid');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/mine')
  .get(
    authMiddlewers.restrictTo('teacher'),
    dynamicMiddleware.addQuery('teacher', 'userId'),
    courseController.getAllcourse
  );

router
  .route('/')
  .get(
    dynamicMiddleware.addQuery('fields', '-test -videos'),
    courseController.getAllcourse
  )
  .post(
    authMiddlewers.restrictTo('teacher'),
    dynamicMiddleware.addVarBody('teacher', 'userId'),
    courseController.createcourse
  );
router
  .route('/:id')
  .get(authMiddlewers.restrictTo('teacher'), courseController.getcourse)
  .patch(authMiddlewers.restrictTo('teacher'), courseController.updatecourse)
  .delete(
    authMiddlewers.restrictTo('teacher', 'admin'),
    courseController.deletecourse
  );
router
  .route('/:id/videos')
  .get(
    authMiddlewers.restrictTo('user'),
    applymid.isApply,
    courseController.getcourse
  );
router
  .route('/:id/test')
  .get(
    applymid.iscomplated,
    dynamicMiddleware.addQuery('_id', 'id'),
    dynamicMiddleware.addQuery('fields', 'test'),
    courseController.getAllcourse
  );
module.exports = router;
