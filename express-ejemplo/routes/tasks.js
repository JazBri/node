const express = require("express");
const taskController = require ("../controllers/task.js");
const router = express.Router();

router.get("/data", taskController.show);
router.post('/insert', taskController.insert);
router.delete('/delete/:id', taskController.delete);
router.get('/task/:id', taskController.showOne);
router.put('/update', taskController.update);
// router.get('/taskT/', taskController.showOneTitle);

module.exports = router
