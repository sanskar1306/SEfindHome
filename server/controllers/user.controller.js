let User = require("../models/user.model");
var nodemailer = require("nodemailer");
const { pass,mailpass } = require("../config");
var multer = require("multer");
var ObjectID = require("mongodb").ObjectID;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var upload = multer({ storage }).single("file");

// Fetch All Users from the DB
const fetchAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })

    .catch((err) => res.status(400).json("Error: " + err));
};

// Fetch a user document based on the email passed
const fetchUserByEmail = (req, res) => {
  User.findOne({ email: req.params.email })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Add new user document to db
const addNewUser = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json("there is some error");
    } else if (err) {
      return res.status(500).json(err);
    }
    var profilePic = "";
    if (req.file !== undefined) {
      profilePic = req.file.filename;
    } else {
      profilePic = "";
    }
    const newUser = new User({
      email: req.body.email,
      type: "owner",
      title: req.body.title,
      username: req.body.userName,
      about: req.body.about,
      rent: req.body.rent,
      address: req.body.address,
      city: req.body.city,
      pin: req.body.pin,
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
      profilePic,
    });

    newUser.save(function (err) {
      if (err) {
        console.log(err);
        return res.status(400).json("Error: " + err);
      }
      console.log("user added");
      return res.status(200).json("profile added");
    });
  });
};

// Update existing user document to the db
const updateUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.title = req.body.title;
      user.username = req.body.userName;
      user.about = req.body.about;
      user.rent = req.body.rent;
      user.address = req.body.address;
      user.city = req.body.city;
      user.pin = req.body.pin;
      user.phone = req.body.phone;
      // user.profilePic = req.file.filename;

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};

// f=1 Book an existing house.
// f=0 unbook an existing house.
const bookUser = (req, res) => {
  
  User.updateOne(
    { _id:ObjectID( req.params.id) },
    { $set: { booked: Boolean(parseInt(req.params.f)) } }
  )
    .then(() => {
      res.json("House booked!");
    })
    .catch((err) => { console.log(err); res.status(400).json("Error: " + err)
});
};

// Delete existing user document on basis of ID
const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("Profile deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
};

// Emailer
const sendEmail = (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "findhomeiiitm@gmail.com",
      pass: `${mailpass}`,
    },
  });

  let mailOptions;

  if (req.params.c == 1) {
    mailOptions = {
      from: "findhomeiiitm@gmail.com",
      to: req.params.email,
      subject: "findHome.com",
      text: "Greetings from findhome.com !!. We are glad to see you and will try to serve our great and best services to you. \n\nThanks and regards \nNaman Lakhwani ",
    };
  }

  if (req.params.c == 2) {
    mailOptions = {
      from: "findhomeiiitm@gmail.com",
      to: req.params.email,
      subject: "findHome.com",
      text: "It is very disheartening to see you leave. We hope that you liked our service and would come back again. \n\nThanks and regards \nNaman Lakhwani",
    };
  }

  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      res.status(400).json("Error: " + error);
    } else {
      res.json("Email sent!");
    }
  });
};

module.exports = {
  fetchAllUsers,
  fetchUserByEmail,
  addNewUser,
  updateUser,
  bookUser,
  deleteUser,
  sendEmail,
};
