const Modules = require('../models/modules');
const cloudinary = require('cloudinary')
const fs = require('fs');
const { Module } = require('module');

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
    let modules = await Modules.findById(req.params.id);
    if (!modules) {
        return res.status(404).json({
            success: false,
            message: 'Module not found'
        })
    }
    
    if (req.body.image){
        // try{
        //     const result = await cloudinary.v2.uploader.destroy(`${modules.img.public_id}`)
        // }
        // catch(error){
        //     console.log(error)
        // }
        console.log('may image')
    }

    if (req.files.pdf){
        // try{
        //     const result = await cloudinary.v2.uploader.destroy(`${modules.file.public_id}`)
        // }
        // catch(error){
        //     console.log(error)
        // }
        console.log('may pdf')
    }
    // let fileLink = {}
    // let imageLink = {}
    // try {
    //     const result = await cloudinary.v2.uploader.upload(req.files.pdf[0].path, {
    //         folder: 'TUPHANDA_MODULES',
            
    //     });
    
    //     fileLink = {
    //         public_id: result.public_id,
    //         url: result.secure_url
    //     }

    // } catch (error) {
    //     console.log(error)
        
    // }
    // try {
    //     const result = await cloudinary.v2.uploader.upload(req.body.image, {
    //         folder: 'TUPHANDA_ASSETS',
            
            
    //     });

    //     imageLink = {
    //         public_id: result.public_id,
    //         url: result.secure_url
    //     }

    // } catch (error) {
    //     console.log(error)
        
    // }
    
    // try{
    //     req.body.file = fileLink
    //     req.body.img = imageLink
    //     const modules = await Modules.findByIdAndUpdate(req.params.id, req.body, {
    //         new: true,
    //         runValidators: true,
    //         useFindAndModify: false
    //     });
    //     if (modules){
    //         res.status(201).json({
    //             success: true,
    //             modules
    //         })
    //     }
    // }
    // catch(error){
    //     return res.status(400).json({
	// 		success: false,
	// 		message: 'Module not created'
	// 	})
    // }
    
}