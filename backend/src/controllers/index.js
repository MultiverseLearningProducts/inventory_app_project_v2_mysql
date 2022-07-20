const sequelize = require('../db');
const debug = require('debug')('app:controllers');
const { validationResult } = require('express-validator');
const User = require('../models/User')

exports.getAllUsers = async (request, response) => {
    try {
        const users = await User.findAll();
 
        if(!users){
            response.status(400).json({
                success: false,
                message: 'No users found',
            })
        } else {
            response
                .status(200)
                .json({users, success: true, message: 'All users found'})
        }
    } catch (error) {
        debug(error);
        response
            .status(400)
            .json({ success: false, message: ` - Error: ${error.message}` });
    }
}

exports.getUserById = async (request, response) => {
    const UserId = request.params.id;
  
    try {
        const user = await User.findByPk(UserId);

        if (!user) {
        response.status(400).json({
            success: false,
            message: 'User not found - check the user ID',
        });
        } else {
        response.status(200).json({
            user,
            success: true,
            message: 'User returned successfully',
        });
        }
    } catch (error) {
        debug(error);
        response.status(400).json({
        success: false,
        message: `User not found - Error: ${error.message}`,
        });
    }
};


exports.createUser = async (request, response) => {
    try {
      const newUser = request.body;
      const createdUser = await User.create(newUser);
      response.status(200).json({
        createdUser,
        success: true,
        message: 'User successfully created',
      });
    } catch (error) {
      debug(error);
      response.status(400).json({
        success: false,
        message: `User not created - Error: ${error.message}`,
      });
    }
}

exports.deleteUserById = async (request, response) => {
  const userId = request.params.id;

  try {
    const userToDelete = await User.findByPk(userId);
    const deletedUser = await userToDelete.destroy();

    response.status(200).json({
      deletedUser,
      success: true,
      message: 'User successfully deleted',
    });
  } catch (error) {
    debug('Error: ', error);
    response.status(400).json({
      success: false,
      message: `Unable to delete - Error: ${error.message}`,
    });
  }
};

exports.updateUser = async (request, response) => {
    const userId = request.params.id;
    const updates = request.body;

    try {
      const userToUpdate = await User.findByPk(userId); //getting product to update

      const updatedUser = await userToUpdate.update(updates);

      response.status(200).json({
        updatedUser,
        success: true,
        message: 'User updated successfully!',
      });
    } catch (error) {
      debug(error);
      response.status(400).json({
        success: false,
        message: `Unable to update - Error: ${error.message}`,
      });
    }
}