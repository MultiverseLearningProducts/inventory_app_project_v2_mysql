const debug = require('debug')('app:controllers');
const sequelize = require('../db');
const Cat = require('../models/Cat');


/**
 * @desc Gets all cats
 * @route GET /api/cats
 */

exports.getAllCats = async (req, res) => {
    try {
        const cats = await Cat.findAll();

        if(!cats){
            res.status(400).json({
                success: false,
                message: 'No Cats Found 😞',
            });
        }else{
            res.status(200).json({
                cats, success: true, message: 'All Cats are ready'
            })
        }

    } catch (error) {
        debug(error);
        res.status(400).json({success: false, message: `Cats not found - Error: ${error.message}` });
    }
};

/**
 * @desc Gets cat by ID
 * @route Get /api/cats/:id
 */

exports.getCatsById = async (req ,res) => {

    const catId = req.params.id;

    try{
        const cat = await Cat.findByPk(catId);

        if(!cat){
            res.status(400).json({
                success: false,
                message: 'Cats not Found 🤔',
            });
        } else {
            res.status(200).json({
                cat,
                success: true,
                message: 'Cats are all ready',
            });
        }

    }catch(error){
        debug(error);
        res.status(400).json({
            success: false,
            message: `Cats not found - Error: ${error.message}`,
        });
    }
};

exports.deleteCatsById = async (req, res) => {

    const catId = req.params.id;

    try{
        const cat = await Cat.findByPk(catId);
        const deletedCat = await cat.destroy();

        if(!deletedCat){
            res.status(400).json({
                success: false,
                message: 'Cats not Found 🤔',
            });
        } else {
            res.statu(200).json({
                deletedCat,
                success: true,
                message: `Cat at id: ${catId} deleted successfully`
            })
        }
    }catch(error){
        debug(error);
        res.status(400).json({
            success: false,
            message: `Cats not found - Error: ${error.message}`
        });
    }
};