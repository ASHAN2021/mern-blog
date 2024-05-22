import bcryptjs from "bcryptjs";
import { errorHandler } from "../utills/error.js";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({ message: "API is working" });
};

export const updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  const { password, username, email, profilePicture } = req.body;

  if (req.user.id !== userId) {
    return next(errorHandler(403, 'You are not allowed to update this user'));
  }

  let updatedFields = {};

  if (password) {
    if (password.length < 6) {
      return next(errorHandler(400, 'Password must be at least 6 characters'));
    }
    updatedFields.password = bcryptjs.hashSync(password, 10);
  }

  if (username) {
    if (username.length < 7 || username.length > 20) {
      return next(errorHandler(400, 'Username must be between 7 and 20 characters'));
    }
    if (username.includes(' ')) {
      return next(errorHandler(400, 'Username cannot contain spaces'));
    }
    if (username !== username.toLowerCase()) {
      return next(errorHandler(400, 'Username must be lowercase'));
    }
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      return next(errorHandler(400, 'Username can only contain letters and numbers'));
    }
    updatedFields.username = username;
  }

  if (email) {
    updatedFields.email = email;
  }

  if (profilePicture) {
    updatedFields.profilePicture = profilePicture;
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updatedFields },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return next(errorHandler(404, 'User not found'));
    }

    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
