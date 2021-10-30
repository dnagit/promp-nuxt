//import baseRoute from './base.routes'


//import authMiddleware from '../middlewares/auth.middleware';
import express from 'express'
import apiRoute from './api.route';




export default (app) => {
  const router = express.Router();
 // router.get("/", appController.index);

  app.use('/api', apiRoute);
  return router;
};
