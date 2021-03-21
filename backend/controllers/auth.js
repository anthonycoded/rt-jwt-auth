const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const errorResponse = require("../utils/errorResponse");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });

    sendToken(user, 201, res)
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  //check both fields were entered
  if (!email || !password) {
    return next(new ErrorResponse("Please provide email and password", 400));
  }
  //does user exist
  try {
    //look for user
    const user = await User.findOne({ email }).select("password");

    // no user found
    if (!user) {
      return next(new ErrorResponse("User not found", 401));
    }

    //user found validate password
    const isMatch = await user.matchPassword(password);

    //wrong password
    if (!isMatch) {
      return next(new ErrorResponse("Invalid email or password", 401));
    }

    //correct password
    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }

  res.send("login router");
};

exports.forgotPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({email: email});

    if (!user) {
      return next(new ErrorResponse("Email could not be sent", 404))
    }
    const resetToken = user.getResetPasswordToken()

    await user.save();

    const resetUrl = `http://localhost:3000/password-rest/${resetToken}`
    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please go to this link to reset your password</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>    
      `
    
      try {
        
      } catch (error) {
        
      }
  } catch (error) {
    
  }
};

exports.passwordReset = (req, res, next) => {
  res.send("resetPassword router");
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({
    success: true,
    token,
  });
};
