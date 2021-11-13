let Guest = require("../models/guest.model");


const getAllBookings = (req, res) => {
 
  const bookings = Guest.find()
    .then((guests) => {
      res.json(guests);
    })

    .catch((err) => res.status(400).json("Error: " + err));
    
    
};

// Add new user document to db
const addNewGuest = (req, res) => {
  const newGuest = new Guest({
    email: req.body.email,
    type: "guest",
    houseid: req.params.id,
  });

  newGuest.save(function (err) {
    if (err) {
      console.log(err);
      return res.status(400).json("Error: " + err);
    }
    console.log("user added");
    return res.status(200).json("Guest added");
  });
};

// Delete existing user document on basis of ID
const deleteGuest = (req, res) => {
  Guest.deleteOne({ houseid: req.params.id })
    .then(() => res.json("Guest deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = {
  addNewGuest,
  deleteGuest,
  getAllBookings
};
