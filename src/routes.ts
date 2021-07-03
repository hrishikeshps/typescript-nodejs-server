import * as express from 'express';
import { Express } from 'express-serve-static-core';

import BaseCtrl from './controllers/baseCtrl';

function apiRoutes(app: Express): void {
  const router = express.Router();
  const baseCtrl = new BaseCtrl();

  // Routes gets listed here
  router.route('/test').get(baseCtrl.getTestData);

  app.use('/api', router);
}

export default apiRoutes;
