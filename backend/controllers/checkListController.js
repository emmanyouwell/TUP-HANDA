const CheckList = require('../models/checklist');
const cloudinary = require('cloudinary')

exports.createItem = async (req, res, next) => {
    const item = await CheckList.create(req.body);
    res.status(201).json({
        success: true,
        item
    })
}

exports.getItems = async (req, res, next) => {
    const list = await CheckList.find();
    res.status(200).json({
        success: true,
        list
    })
}