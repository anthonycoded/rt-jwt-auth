const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");

exports.protect = async (req, res, next) => {
  let token;
  //Check for jwt in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  //No Token
  if (!token) {
    return next(new ErrorResponse("Not authorized to acces this route", 401));
  }

  try {
    //decode jwt get user id
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // find user by id
    const user = await User.findById(decoded.id);
    //No User Error
    if (!user) {
      return next(new ErrorResponse("No user found", 404));
    }

    //User found
    req.user = user;

    next();
  } catch (error) {
    return next(
      new ErrorResponse("You are not authorized to acces this route", 401)
    );
  }
};
