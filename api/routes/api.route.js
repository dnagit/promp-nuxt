

import testController from '../controllers/test.controller'


router.get("/test/v1/getdetail", await testController.getDetail);

export default router;
