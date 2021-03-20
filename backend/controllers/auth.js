const User = require("../models/User");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  //check both fields were entered
  if (!email || !password) {
    res
      .status(400)
      .json({ success: false, error: "Please provide an email and password" });
  }
  //does user exist
  try {
    //look for user
    const user = await User.findOne({ email }).isSelected("password");
    // no user found
    if (!user) {
      res
        .status(404)
        .json({ success: false, error: "invalid Email or Password" });
    }

    //user found validate password
    const isMatch = await user.matchPassword(password);

    //wrong password
    if (!isMatch) {
      res
        .status(404)
        .json({ success: false, error: "Invalid username or password" });
    }

    //correct password
    res.status(200).json({
      success: true,
      token: "sdxfvbkbui67",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }

  res.send("login router");
};

exports.forgotPassword = (req, res, next) => {
  res.send("forgotPassword router");
};

exports.passwordReset = (req, res, next) => {
  res.send("resetPassword router");
};
