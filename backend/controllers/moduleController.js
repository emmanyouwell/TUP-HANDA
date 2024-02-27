const Modules = require('../models/modules');
const cloudinary = require('cloudinary')


exports.createModule = async (req, res, next) => {
    let fileLink = {}
    

    let imageLink = {}
    try {
        const result = await cloudinary.v2.uploader.upload(req.files.pdf[0].path, {
            folder: 'TUPHANDA_MODULES',
            
        });
    
        fileLink = {
            public_id: result.public_id,
            url: result.secure_url
        }

    } catch (error) {
        console.log(error)
        
    }
    try {
        const result = await cloudinary.v2.uploader.upload(req.body.image, {
            folder: 'TUPHANDA_ASSETS',
            
            
        });

        imageLink = {
            public_id: result.public_id,
            url: result.secure_url
        }

    } catch (error) {
        console.log(error)
        
    }
    
    try{
        req.body.file = fileLink
        req.body.img = imageLink
        const modules = await Modules.create(req.body);
        if (modules){
            res.status(201).json({
                success: true,
                modules
            })
        }
    }
    catch(error){
        return res.status(400).json({
			success: false,
			message: 'Module not created'
		})
    }
    
	
}

exports.getModules = async (req, res, next) => {
    try{
        const modules = await Modules.find()
        res.status(200).json({
            success: true,
            modules
        })
    }
    catch(error){
        return res.status(400).json({
            success: false,
            message: 'Module not found'
        })
    }
}

exports.getSingleModule = async (req, res, next) => {
	const modules = await Modules.findById(req.params.id);
	if (!modules) {
		return res.status(404).json({
			success: false,
			message: 'Module not found'
		})
	}
	res.status(200).json({
		success: true,
		modules
	})
}

exports.updateModule = async (req, res, next) => {
    let fileLink = {}
    let imageLink = {}
    let modules = await Modules.findById(req.params.id);
    if (!modules) {
        return res.status(404).json({
            success: false,
            message: 'Module not found'
        })
    }
    
    if (req.body.image){
        try{
            const result = await cloudinary.v2.uploader.destroy(`${modules.img.public_id}`)
           
        }
        catch(error){
            console.log(error)
        }
        try {
            const result = await cloudinary.v2.uploader.upload(req.body.image, {
                folder: 'TUPHANDA_ASSETS',
                
                
            });
    
            imageLink = {
                public_id: result.public_id,
                url: result.secure_url
            }
    
        } catch (error) {
            console.log(error)
            
        }
        req.body.img = imageLink
    }
    

    if (req.files){
        try{
            const result = await cloudinary.v2.uploader.destroy(`${modules.file.public_id}`)
        }
        catch(error){
            console.log(error)
        }
        if (req.files.pdf){
            try {
                const result = await cloudinary.v2.uploader.upload(req.files.pdf[0].path, {
                    folder: 'TUPHANDA_MODULES',
                    
                });
            
                fileLink = {
                    public_id: result.public_id,
                    url: result.secure_url
                }
        
            } catch (error) {
                console.log(error)
                
            }
            req.body.file = fileLink
        }
        
    }
    try{
        const modules = await Modules.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        if (modules){
            res.status(201).json({
                success: true,
                modules
            })
        }
    }
    catch(error){
        return res.status(400).json({
			success: false,
			message: 'Module not created'
		})
    }
    
}

exports.deleteModule = async (req, res, next) => {
	const modules = await Modules.findByIdAndDelete(req.params.id);
	if (!modules) {
		return res.status(404).json({
			success: false,
			message: 'Module not found'
		})
	}

	res.status(200).json({
		success: true,
		message: 'Module deleted'
	})
}