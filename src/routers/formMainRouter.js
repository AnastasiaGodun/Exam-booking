const { Router } = require('express');
const { tableControllerRender,
  // tableControllerRead,
} = require('../controllers/userController');

const tableRouter = Router();

tableRouter.route('/table')
  .get(tableControllerRender);
// .post(tableControllerRead)

module.exports = tableRouter;
