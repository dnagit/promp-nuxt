
import express from 'express'

import testController from './controllers/test.controller'
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

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

  
app.use(router);


  // Listen the server
//app.listen(port, host)

//module.exports = app
module.exports = {
    path: '/api',
    handler: app
  }