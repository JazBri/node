const express = require("express");
const taskUserController = require("../controllers/taskUser.js");
const router = express.Router();

router.get("/", taskUserController.show);
router.get("/:id", taskUserController.showOne);
router.post("/", taskUserController.insert);
router.delete("/:id", taskUserController.deleteOnetTaskUser);
router.get("/inner", taskUserController.innerTasksUser);

module.exports = router;
