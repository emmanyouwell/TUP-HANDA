const mongoose = require('mongoose');
const User = require('../models/user');

exports.allDownloadedModules = async (req, res) => {
  try {
    const result = await User.aggregate([
      { $unwind: '$downloadedModules' },
      {
        $group: {
          _id: '$downloadedModules',
          count: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: 'modules', // replace with your actual Modules collection name
          localField: '_id',
          foreignField: '_id',
          as: 'module'
        }
      },
      {
        $unwind: '$module'
      },
      {
        $project: {
          _id: 0,
          moduleId: '$_id',
          moduleName: '$module.title', // replace 'name' with your actual module name field
          downloadCount: '$count'
        }
      }
    ]);

    

    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

