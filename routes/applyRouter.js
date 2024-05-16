const applayController = require('../controllers/applayController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/mine')
  .get(
    authMiddlewers.restrictTo("user"),
    dynamicMiddleware.addQuery('user', 'userId'),
    applayController.getAllapplay
  );

router
  .route('/')
  .get(authMiddlewers.restrictTo("admin"),applayController.getAllapplay)
  .post(authMiddlewers.restrictTo("user"),dynamicMiddleware.addVarBody("user","userId"),applayController.createapplay);
router
  .route('/:id')
  .get(applayController.getapplay)
  .patch(applayController.updateapplay)
  .delete(authMiddlewers.restrictTo("teacher"),applayController.deleteapplay);
module.exports = router;
