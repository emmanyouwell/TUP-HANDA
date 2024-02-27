const Videos = require('../models/videoResources');




exports.createVideo = async (req, res, next) => {
    // console.log(req.body)
    try{
        const videos = await Videos.create(req.body);
        if (videos){
            res.status(201).json({
                success: true,
                videos
            })
        }
    }
    catch(error){
        return res.status(400).json({
            success: false,
            message: 'Video not created'
        })
    }
    
	
}

exports.getVideos = async (req, res, next) => {
    try{
        const videos = await Videos.find()
        res.status(200).json({
            success: true,
            videos
        })
    }
    catch(error){
        return res.status(400).json({
            success: false,
            message: 'Videos not found'
        })
    }
}

exports.getSingleVideo = async (req, res, next) => {
	const videos = await Videos.findById(req.params.id);
	if (!videos) {
		return res.status(404).json({
			success: false,
			message: 'Video not found'
		})
	}
	res.status(200).json({
		success: true,
		videos
	})
}

exports.updateVideo = async (req, res, next) => {
    let videos = await Videos.findById(req.params.id);
    if (!videos) {
        return res.status(404).json({
            success: false,
            message: 'Video not found'
        })
    }
    console.log(req.body)
    try{
        const video = await Videos.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        if (video){
            res.status(201).json({
                success: true,
                video
            })
        }
    }
    catch(error){
        return res.status(400).json({
			success: false,
			message: 'Video not created'
		})
    }
    
}

exports.deleteVideo = async (req, res, next) => {
	const videos = await Videos.findByIdAndDelete(req.params.id);
	if (!videos) {
		return res.status(404).json({
			success: false,
			message: 'Video not found'
		})
	}

	res.status(200).json({
		success: true,
		message: 'Video deleted'
	})
}