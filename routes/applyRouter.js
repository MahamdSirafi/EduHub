const applayController = require('../controllers/applayController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/')
  .get(applayController.getAllapplay)
  .post(applayController.createapplay);
router
  .route('/:id')
  .get(applayController.getapplay)
  .patch(applayController.updateapplay)
  .delete(applayController.deleteapplay);
module.exports = router;
