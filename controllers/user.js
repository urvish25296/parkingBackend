const User = require("../models/user");
const mysql = require("mysql2");

exports.postAddUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phonenum = req.body.phonenum;
  const password = req.body.password;
  User.create({
    name: name,
    email: email,
    phonenum: phonenum,
    password: password,
  })
    .then((result) =>
      res.status(200).json({
        message: "User added successfully",
        post: result,
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error!!",
        post: err,
      });
    });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findAll({
    where: {
      email: email,
      password: password,
    },
  })
    .then((result) =>
      res.status(200).json({
        message: "User added successfully",
        post: result,
      })
    )
    .catch((err) =>
      res.status(500).json({
        message: "Error!!",
        post: err,
      })
    );
};
