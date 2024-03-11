const Users = require('../models/user');

exports.getVideoViews = async (req, res) => {
  try {
    const videoViews = await Users.aggregate([
      {
        $unwind: '$watchHistory'
      },
      {
        $group: {
          _id: '$watchHistory.video',
          views: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: 'videos', // name of the videos collection
          localField: '_id',
          foreignField: '_id',
          as: 'videoDetails'
        }
      },
      {
        $unwind: '$videoDetails'
      },
      {
        $group: {
          _id: null,
          totalViews: { $sum: '$views' },
          videos: { $push: '$$ROOT' }
        }
      }
    ]);

    res.json(videoViews[0] || {});
  } catch (err) {
    res.status(500).send(err);
  }
};