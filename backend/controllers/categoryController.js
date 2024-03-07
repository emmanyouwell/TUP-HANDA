const Category = require('../models/category');
const slugify = require('slugify')
const APIFeatures = require('../utils/apiFeatures')
const ArchivedCategory = require('../models/archives/archivedCategory');
exports.createCategory = async (req, res, next) => {

    try{
        req.body.slug = slugify(req.body.name, {lower: true});
        const category = await Category.create(req.body);
        if (category){
            res.status(201).json({
                success: true,
                category
            })
        }
    }
    catch(error){
        return res.status(400).json({
			success: false,
			message: 'Category not created'
		})
    }
    
	
}

exports.getCategories = async (req, res, next) => {
    try{
        const categories = await Category.find()
        res.status(200).json({
            success: true,
            categories
        })
    }
    catch(error){
        return res.status(400).json({
            success: false,
            message: 'Categories not found'
        })
    }
}

exports.getSingleCategory = async (req, res, next) => {
	const category = await Category.findById(req.params.id);
	if (!category) {
		return res.status(404).json({
			success: false,
			message: 'Module not found'
		})
	}
	res.status(200).json({
		success: true,
		category
	})
}

exports.updateCategory = async (req, res, next) => {
   
    let categories = await Category.findById(req.params.id);
    if (!categories) {
        return res.status(404).json({
            success: false,
            message: 'Category not found'
        })
    }
    
   
    try{
        if (req.body.name){
            req.body.slug = slugify(req.body.name, {lower: true});
        }
        const categories = await Category.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });
        if (categories){
            res.status(201).json({
                success: true,
                categories
            })
        }
    }
    catch(error){
        return res.status(400).json({
			success: false,
			message: 'Category not updated'
		})
    }
    
}

exports.deleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }

        // Create a new document in the archivedCategories collection
        await ArchivedCategory.create(category.toObject());

        // Remove the document from the categories collection
        await Category.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Category archived'
        });
    } catch (error) {
        
        return res.status(500).json({
            success: false,
            message: 'Server Error' + error
        });
    }
}

exports.getArchivedCategories = async (req, res, next) => {
    try {
        const categories = await ArchivedCategory.find();

        res.status(200).json({
            success: true,
            categories
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }

}

exports.restoreArchivedCategories = async (req, res, next) => {
    try {
        const category = await ArchivedCategory.findById(req.params.id);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }

        // Create a new document in the categories collection
        await Category.create(category.toObject());

        // Remove the document from the archivedCategories collection
        await ArchivedCategory.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Category restored'
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }

}

exports.getAdminCategories = async (req,res,next)=>{
    const resPerPage = 5;
	const categoryCount = await Category.countDocuments();
	const apiFeatures = new APIFeatures(Category.find(), req.query).search().filter()
	apiFeatures.pagination(resPerPage);
	const categories = await apiFeatures.query;
	const filteredModulesCount = await Category.countDocuments(apiFeatures.query.getFilter());
	if (!categories) {
		return res.status(404).json({
			success: false,
			message: 'No Users'
		})
	}
	res.status(200).json({
		success: true,
		count: categories.length,
		categoryCount,
		categories,
		resPerPage,
		filteredModulesCount,
	})
}