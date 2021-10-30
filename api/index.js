
import express from 'express'
import allRoutes from './routes/all.routes';
import apiRoute from './routes/api.route'
import testController from './controllers/test.controller'
import httpResponse from './handles/httpresponse';

const app = express()
const router = express.Router();
app.use(express.json({limit: '50mb'}));
app.use(
  express.urlencoded({
    limit: '50mb',
    extended: true,
  })
);
router.get('/me', (req, res) => {
    return res.json({
        data: {
        
        }
    });
});
router.get('/test',testController.getDetail)

  
app.use('',router);

app.use(httpResponse);
module.exports = app