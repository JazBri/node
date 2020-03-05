const express = require("express");
const taskController = require ("../controllers/task.js");
const router = express.Router();

router.get("/", taskController.show);
router.post('/', taskController.insert);
router.delete('/:id', taskController.delete);
router.get('/:id', taskController.showOne);
router.put('/:id', taskController.update);
router.put('/task/:id', taskController.updateTask);
// router.delete('/table', taskController.deleteTable);



module.exports = router
