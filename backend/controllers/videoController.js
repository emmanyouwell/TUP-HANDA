const Videos = require('../models/videoResources');
const APIFeatures = require('../utils/apiFeatures');
const ArchivedVideos = require('../models/archives/archivedVideos');


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
    const resPerPage = 3;
	const videosCount = await Videos.countDocuments();
	const apiFeatures = new APIFeatures(Videos.find().populate('category'), req.query).search().filter()
	apiFeatures.pagination(resPerPage);
	const videos = await apiFeatures.query;
	const filteredVideosCount = await Videos.countDocuments(apiFeatures.query.getFilter());
	if (!videos) {
		return res.status(404).json({
			success: false,
			message: 'No Users'
		})
	}
	res.status(200).json({
		success: true,
		count: videos.length,
		videosCount,
		videos,
		resPerPage,
		filteredVideosCount,
	})
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
	try {
        const videos = await Videos.findById(req.params.id);
        if (!videos) {
            return res.status(404).json({
                success: false,
                message: 'Video not found'
            });
        }

        // Create a new document in the archivedCategories collection
        await ArchivedVideos.create(videos.toObject());

        // Remove the document from the categories collection
        await Videos.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Videos archived'
        });
    } catch (error) {

        return res.status(500).json({
            success: false,
            message: 'Server Error' + error
        });
    }
}

exports.getAdminVideos = async (req,res,next)=>{
    const resPerPage = 5;
	const videosCount = await Videos.countDocuments();
	const apiFeatures = new APIFeatures(Videos.find().populate('category'), req.query).search().filter()
	apiFeatures.pagination(resPerPage);
	const videos = await apiFeatures.query;
	const filteredVideosCount = await Videos.countDocuments(apiFeatures.query.getFilter());
	if (!videos) {
		return res.status(404).json({
			success: false,
			message: 'No Users'
		})
	}
	res.status(200).json({
		success: true,
		count: videos.length,
		videosCount,
		videos,
		resPerPage,
		filteredVideosCount,
	})
}

exports.getArchivedVideos = async (req,res,next)=>{
    try{
        const resPerPage = 5;
        const videosCount = await ArchivedVideos.countDocuments();
        const apiFeatures = new APIFeatures(ArchivedVideos.find(), req.query).search().filter()
        apiFeatures.pagination(resPerPage);
        const videos = await apiFeatures.query;
        const filteredVideosCount = await ArchivedVideos.countDocuments(apiFeatures.query.getFilter());
        if (!videos) {
            return res.status(404).json({
                success: false,
                message: 'No Users'
            })
        }
        res.status(200).json({
            success: true,
            count: videos.length,
            videosCount,
            videos,
            resPerPage,
            filteredVideosCount,
        })
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
    
}

exports.restoreArchivedVideos = async (req, res, next) => {
    try {
        const videos = await ArchivedVideos.findById(req.params.id);
        if (!videos) {
            return res.status(404).json({
                success: false,
                message: 'Video not found'
            });
        }

        // Create a new document in the categories collection
        await Videos.create(videos.toObject());

        // Remove the document from the archivedCategories collection
        await ArchivedVideos.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Video restored'
        });
    } catch (error) {
        console.error("Error during category restoration:", error);
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
}

