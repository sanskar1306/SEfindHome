const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.use(express.static(__dirname + "./public/"));

router.route("/").get(userController.fetchAllUsers);
router.route("/:email").get(userController.fetchUserByEmail);
router.route("/add").post(userController.addNewUser);
router.route("/update/:id").post(userController.updateUser);
router.route("/delete/:id").delete(userController.deleteUser);
router.route("/sendMail/:email/:c").get(userController.sendEmail);
router.route("/book/:id/:f").post(userController.bookUser);

module.exports = router;
