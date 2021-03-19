const User = require('../models/User')

exports.register = async (req, res, next) => {
  const {username, email, password} = req.body;

  try {
    const user = await User.create({
      username, email, password
    });

    res.status(201).json({
      success: true,
      user
    })
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
};

exports.login = (req, res, next) => {
  res.send("login router");
};

exports.forgotPassword = (req, res, next) => {
  res.send("forgotPassword router");
};

exports.passwordReset = (req, res, next) => {
  res.send("resetPassword router");
};
