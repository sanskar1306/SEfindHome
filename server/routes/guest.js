const express = require("express");
const router = express.Router();
const guestController = require("../controllers/guest.controller");

// router.use(express.static(__dirname + "./public/"));

router.route("/add/:id").post(guestController.addNewGuest);
router.route("/").get(guestController.getAllBookings);
router.route("/delete/:id").delete(guestController.deleteGuest);
module.exports = router;
