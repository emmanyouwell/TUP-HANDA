const Modules = require('../models/modules');
const cloudinary = require('cloudinary')
const APIFeatures = require('../utils/apiFeatures')
const ArchivedModule = require('../models/archives/archivedModule')
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
	try {
        const modules = await Modules.findById(req.params.id);
        if (!modules) {
            return res.status(404).json({
                success: false,
                message: 'Module not found'
            });
        }

        // Create a new document in the archivedCategories collection
        await ArchivedModule.create(modules.toObject());

        // Remove the document from the categories collection
        await Modules.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Module archived'
        });
    } catch (error) {

        return res.status(500).json({
            success: false,
            message: 'Server Error' + error
        });
    }
}

exports.getAdminModules = async (req,res,next)=>{
    const resPerPage = 5;
	const modulesCount = await Modules.countDocuments();
	const apiFeatures = new APIFeatures(Modules.find(), req.query).search().filter()
	apiFeatures.pagination(resPerPage);
	const modules = await apiFeatures.query;
	const filteredModulesCount = await Modules.countDocuments(apiFeatures.query.getFilter());
	if (!modules) {
		return res.status(404).json({
			success: false,
			message: 'No Users'
		})
	}
	res.status(200).json({
		success: true,
		count: modules.length,
		modulesCount,
		modules,
		resPerPage,
		filteredModulesCount,
	})
}

exports.getArchivedModules = async (req, res, next) => {
    try {
        const resPerPage = 5;
        const archivedModulesCount = await ArchivedModule.countDocuments();
        const apiFeatures = new APIFeatures(ArchivedModule.find(), req.query).search().filter()
        apiFeatures.pagination(resPerPage);
        const archivedModules = await apiFeatures.query;
        const filteredArchivedModulesCount = await ArchivedModule.countDocuments(apiFeatures.query.getFilter());
        if (!archivedModules) {
            return res.status(404).json({
                success: false,
                message: 'No Archived Modules'
            })
        }
        res.status(200).json({
            success: true,
            count: archivedModules.length,
            archivedModulesCount,
            archivedModules,
            resPerPage,
            filteredArchivedModulesCount
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }

}

exports.restoreArchivedModules = async (req, res, next) => {
    try {
        const modules = await ArchivedModule.findById(req.params.id);
        if (!modules) {
            return res.status(404).json({
                success: false,
                message: 'Module not found'
            });
        }

        // Create a new document in the archivedCategories collection
        await Modules.create(modules.toObject());

        // Remove the document from the categories collection
        await ArchivedModule.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Module restored'
        });
    } catch (error) {

        return res.status(500).json({
            success: false,
            message: 'Server Error' + error
        });
    }
}