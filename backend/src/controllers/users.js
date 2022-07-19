const squelize = require("../db");
const User = require("../models/User");
const debug = require("debug")("app:controllers");
const { validationResult } = require("express-validator");

/**
 * @desc Gets all users
 * @route GET /api/users
 * @access Private
 */

/**
 * @desc Get single user by id
 * @route GET api/users/:id
 * @access Private
 */
exports.getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(400).json({
        success: false,
        message: "User not found - check the user ID",
      });
    } else {
      res.status(200).json({
        user,
        success: true,
        message: "User returned successfully",
      });
    }
  } catch (error) {
    debug(error);
    res.status(400).json({
      success: false,
      message: `User not found - Error: ${error.message}`,
    });
  }
};

/**
 * @desc Delete single user by id
 * @route DELETE api/users/delete/:id
 * @access Private
 */
exports.deleteUsertById = async (req, res) => {
  const userId = req.params.id;

  try {
    const userToDelete = await User.findByPk(userId);
    const deleteUser = await userToDelete.destroy();

    res.status(200).json({
      deleteUser,
      success: true,
      message: "User successfully deleted",
    });
  } catch (error) {
    debug("Error: ", error);
    res.status(400).json({
      success: false,
      message: `Unable to delete user - Error: ${error.message}`,
    });
  }
};

/**
 * @desc Create single user
 * @route POST api/user/create
 * @access Public
 */

/**
 * @desc Update single user by ID
 * @route PUT api/users/update/:id
 * @access Private
 */
exports.updateUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ success: false, error: errors.array() });
  } else {
    const userId = req.params.id;
    const updates = req.body;

    try {
      const userToUpdate = await User.findByPk(userId); 

      const updatedUser = await userToUpdate.update(updates);

      res.status(200).json({
        updatedUser,
        success: true,
        message: "User updated successfully!",
      });
    } catch (error) {
      debug(error);
      res.status(400).json({
        success: false,
        message: `Unable to update user - Error: ${error.message}`,
      });
    }
  }
};
