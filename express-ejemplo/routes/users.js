const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();

//show();              //Function that shows the whole row
router.get("/", userController.show);

//insert();            //Function that inserts a user in the table
router.post("/", userController.insert);

//delete();            //Funtion that deletes one user table
router.delete("/:id", userController.deleteOneUser);

//shareUser();
router.get("/:id", userController.shareUser);

// //addNewTable();       //Funcion that adds a new table
// router.put('/table', userController.addNewTable);
//innerJoin();         //Function that 'inner join' task and user table
//router.get("/inner", userController.innerJoin);

// router.get("/", taskController.show);
// router.post('/', taskController.insert);
// router.delete('/:id', taskController.delete);
// router.get('/:id', taskController.showOne);
// router.put('/:id', taskController.update);
// router.put('/task/:id', taskController.updateTask);

//SELECT * FROM users;

module.exports = router;
