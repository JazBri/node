const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

router.get('/data', userController.show);
router.post('/insert', userController.insert);
router.put('/table', userController.addNewTable);
router.put('/delete', userController.delete);
router.put('/delete/:id', userController.deleteOne);
router.get('/inner', userController.innerJoin);



module.exports = router
