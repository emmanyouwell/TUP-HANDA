const User = require('../models/user')
const sendToken = require('../utils/jwToken')
const sendEmail = require('../utils/sendEmail')
const crypto = require('crypto')
const cloudinary = require('cloudinary')
const APIFeatures = require('../utils/apiFeatures')
const Modules = require('../models/modules')

exports.registerUser = async (req, res, next) => {

    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
        return res.status(400).json({
            success: false,
            message: 'Email already in use.'
        })
    }
    let images = []

    if (!req.body.avatar) {
        req.body.avatar = 'https://res.cloudinary.com/dtrr0ihcb/image/upload/v1700742284/LTC_avatars/default_avatar_bla84n.jpg'
        // console.log(req.body.avatar + 'default')
    }
    if (typeof req.body.avatar === 'string') {
        images.push(req.body.avatar)
        // console.log(images + 'string')
    } else {
        images = req.body.avatar
        // console.log(req.body.images)
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
        let imageDataUri = images[i]
        // console.log(imageDataUri)
        try {
            const result = await cloudinary.v2.uploader.upload(`${imageDataUri}`, {
                folder: 'TUPHANDA_AVATARS',
                width: 150,
                crop: "scale",
            });

            imagesLinks.push({
                public_id: result.public_id,
                url: result.secure_url
            })

        } catch (error) {
            console.log(error)
            console.log('Controller')
        }

    }

    req.body.avatar = imagesLinks

    const user = await User.create(req.body);
    if (!user)
        return res.status(400).json({
            success: false,
            message: 'User not created'
        })
    // sendToken(user, 200, res)
    const confirmationToken = user.getConfirmEmailToken()
    await user.save({ validateBeforeSave: false })
    let confirmEmailUrl = ''
    if (process.env.SMTP_HOST === 'smtp.gmail.com') {
        confirmEmailUrl = `${req.protocol}://tup-handa.vercel.app/confirm/${confirmationToken}`
    }
    else {
        confirmEmailUrl = `${req.protocol}://localhost:5173/confirm/${confirmationToken}`
    }

    const message = `Please click the link to activate your email:<a href=${confirmEmailUrl}>\n\n${confirmEmailUrl}\n\n</a>If you have not requested this email, then ignore it.`
    try {
        await sendEmail({
            email: user.email,
            subject: 'Account Activation',
            message
        })
        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`
        })
    } catch (error) {
        user.confirmEmailToken = undefined
        user.confirmTokenExpire = undefined
        await user.save({ validateBeforeSave: false })
        return res.status(500).json({ error: error.message })

    }
}

exports.confirmEmail = async (req, res, next) => {
    const confirmEmailToken = crypto.createHash('sha256').update(req.params.token).digest('hex')
    const user = await User.findOne({
        confirmEmailToken,
        confirmTokenExpire: { $gt: Date.now() }
    })
    if (!user) {
        return res.status(400).json({ message: 'Invalid token or token has expired' })
    }
    if (user.isVerified) {
        return res.status(400).json({ message: 'Email is already verified' })
    }

    user.isVerified = true;
    user.confirmEmailToken = undefined;
    user.confirmTokenExpire = undefined;
    await user.save({ validateBeforeSave: false })
    sendToken(user, 200, res)
}

exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            error: 'Please enter email & password'
        })
    }

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        return res.status(401).json({
            message: 'No user found with this email'
        })
    }

    const isPasswordMatched = await user.comparePassword(password)

    if (!user.isVerified && isPasswordMatched) {
        const confirmationToken = user.getConfirmEmailToken()
        await user.save({ validateBeforeSave: false })
        let confirmEmailUrl = ''
        if (process.env.SMTP_HOST === 'smtp.gmail.com') {
            confirmEmailUrl = `${req.protocol}://tup-handa.vercel.app/confirm/${confirmationToken}`
        }
        else {
            confirmEmailUrl = `${req.protocol}://localhost:5173/confirm/${confirmationToken}`
        }
        const message = `Please click the link to activate your email:<a href=${confirmEmailUrl}>\n\n${confirmEmailUrl}\n\n</a>If you have not requested this email, then ignore it.`
        try {
            await sendEmail({
                email: user.email,
                subject: 'Account Activation',
                message
            })
            res.status(200).json({
                success: true,
                message: `Email Activation link sent to: ${user.email}`,
                isVerified: user.isVerified,
                isAuthenticated: true
            })
        } catch (error) {
            user.confirmEmailToken = undefined
            user.confirmTokenExpire = undefined
            await user.save({ validateBeforeSave: false })
            return res.status(500).json({ error: error.message })

        }
    }
    else if (!isPasswordMatched) {
        return res.status(401).json({
            message: 'Invalid Email or Password',
            isVerified: user.isVerified,
            isAuthenticated: false
        })
    }
    else {
        sendToken(user, 200, res)
    }


}

exports.logout = async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: 'Logged out'
    })
}

exports.forgotPassword = async (req, res, next) => {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        console.log('No user found with this email')
        return res.status(404).json({ error: 'No user found with this email' })

    }
    else {

        const resetToken = user.getResetPasswordToken()
        await user.save({ validateBeforeSave: false })
        let resetUrl = ''
        if (process.env.SMTP_HOST === 'smtp.gmail.com') {
            resetUrl = `${req.protocol}://tup-handa.vercel.app/confirm/${resetToken}`
        }
        else {
            resetUrl = `${req.protocol}://localhost:5173/confirm/${resetToken}`
        }
        const message = `Your password reset token is as follow:<a href=${resetUrl}>\n\n${resetUrl}\n\n</a>If you have not requested this email, then ignore it.`
        try {
            await sendEmail({
                email: user.email,
                subject: 'TUP Handa Password Recovery',
                message
            })
            res.status(200).json({
                success: true,
                message: `Email sent to: ${user.email}`
            })
        } catch (error) {
            user.resetPasswordToken = undefined
            user.resetPasswordExpire = undefined
            await user.save({ validateBeforeSave: false })
            return res.status(500).json({ error: error.message })
        }
    }


}

exports.resetPassword = async (req, res, next) => {
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return res.status(400).json({ message: 'Password reset token is invalid or has been expired' })
    }
    if (req.body.password !== req.body.confirmPassword) {
        return res.status(400).json({ message: 'Password does not match' })
    }
    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined
    await user.save()
    sendToken(user, 200, res)
}

exports.updatePassword = async (req, res, next) => {
    const user = await User.findById(req.user.id).select('password')
    const isMatched = await user.comparePassword(req.body.oldPassword)
    if (!isMatched) {
        return res.status(400).json({ message: 'Old password is incorrect' })
    }
    user.password = req.body.password
    await user.save()
    sendToken(user, 200, res)
}


exports.getUserProfile = async (req, res, next) => {
    const user = await User.findById(req.user.id)

    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'Course not found'
        })
    }
    res.status(200).json({
        success: true,
        user
    })
}

exports.updateProfile = async (req, res, next) => {
    let user = await User.findById(req.user.id)
    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    }
    let images = []
    if (!req.body.avatar) {
        req.body.avatar = user.avatar
    }
    else if (typeof req.body.avatar === 'string') {
        images.push(req.body.avatar)
    }
    else {
        images = req.body.avatar
    }
    let imageLinks = [];
    if (images.length > 0) {
        if (images !== undefined) {
            for (let i = 0; i < user.avatar.length; i++) {
                try {
                    let imageDataUri = user.avatar[i]
                    const result = await cloudinary.v2.uploader.destroy(`${imageDataUri.public_id}`)
                } catch (error) {
                    console.log(error)
                }
            }
        }

        for (let i = 0; i < images.length; i++) {
            try {
                let imageDataUri = images[i]
                const result = await cloudinary.v2.uploader.upload(imageDataUri, {
                    folder: 'TUPHANDA_AVATARS',
                    width: 150,
                    crop: "scale",
                    quality: "auto:best"
                })
                imageLinks.push({
                    public_id: result.public_id,
                    url: result.secure_url
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    if (imageLinks.length === 0) {
        req.body.avatar = user.avatar
    }
    else {
        req.body.avatar = imageLinks
    }

    let cover = []
    if (!req.body.coverAvatar) {
        req.body.coverAvatar = user.coverAvatar
    }
    else if (typeof req.body.coverAvatar === 'string') {
        cover.push(req.body.coverAvatar)
    }
    else {
        cover = req.body.coverAvatar
    }
    let coverLinks = [];
    if (cover.length > 0) {
        if (cover !== undefined) {
            for (let i = 0; i < user.coverAvatar.length; i++) {
                try {
                    let coverDataUri = user.coverAvatar[i]
                    const result = await cloudinary.v2.uploader.destroy(`${coverDataUri.public_id}`)
                } catch (error) {
                    console.log(error)
                }
            }
        }

        for (let i = 0; i < cover.length; i++) {
            try {
                let coverDataUri = cover[i]
                const result = await cloudinary.v2.uploader.upload(coverDataUri, {
                    folder: 'TUPHANDA_COVER_PHOTO',

                })
                coverLinks.push({
                    public_id: result.public_id,
                    url: result.secure_url
                })
            } catch (error) {
                console.log(error)
            }
        }
    }

    if (coverLinks.length === 0) {
        req.body.coverAvatar = user.coverAvatar
    }
    else {
        req.body.coverAvatar = coverLinks
    }


    user = await User.findByIdAndUpdate(req.user.id, req.body, {
        new: true,
        runValidators: true,
    })
    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'User not updated'
        })
    }
    else {
        console.log(user)
    }


    return res.status(200).json({
        success: true,
        user
    })

}

exports.allUsers = async (req, res, next) => {
    const users = await User.find()
    res.status(200).json({
        success: true,
        users
    })
}

exports.getUserDetails = async (req, res, next) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        return res.status(400).json({
            message: `User not found with id: ${req.params.id}`
        })
    }
    res.status(200).json({
        success: true,
        user
    })
}

exports.deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        return res.status(401).json({
            message: `User not found with id: ${req.params.id}`
        })
    }

    if (user.avatar !== undefined) {
        for (let i = 0; i < user.avatar.length; i++) {
            try {
                let imageDataUri = user.avatar[i]
                const result = await cloudinary.v2.uploader.destroy(`${imageDataUri.public_id}`)
            } catch (error) {
                console.log(error)
            }
        }
    }

    await User.findByIdAndDelete(req.params.id)
    return res.status(200).json({
        success: true,
    })
}

exports.updateUser = async (req, res, next) => {
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role
    }
    const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
    })

    return res.status(200).json({
        success: true
    })
}

exports.getAdminUsers = async (req, res, next) => {
    const resPerPage = 5;
    const usersCount = await User.countDocuments();
    const apiFeatures = new APIFeatures(User.find(), req.query).search().filter()
    apiFeatures.pagination(resPerPage);
    const users = await apiFeatures.query;
    const filteredUsersCount = await User.countDocuments(apiFeatures.query.getFilter());
    if (!users) {
        return res.status(404).json({
            success: false,
            message: 'No Users'
        })
    }
    res.status(200).json({
        success: true,
        count: users.length,
        usersCount,
        users,
        resPerPage,
        filteredUsersCount,
    })
}

exports.updateRole = async (req, res, next) => {
    const role = await User.findById(req.params.id)
    if (role.role === 'admin') {
        const user = await User.findByIdAndUpdate(req.params.id, {
            role: 'user'
        }, {
            new: true,
            runValidators: true,
        })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User not found'
            })
        }
        res.status(200).json({
            success: true
        })
    }
    else if (role.role === 'user') {
        const user = await User.findByIdAndUpdate(req.params.id, {
            role: 'admin'
        }, {
            new: true,
            runValidators: true,
        })
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User not found'
            })
        }
        res.status(200).json({
            success: true
        })
    }

}

exports.getUserPerDepartment = async (req, res, next) => {
    const usersPerDepartment = await User.aggregate([
        {
            $group: {
                _id: "$department",
                totalUsers: { $sum: 1 }
            }
        }
    ]);

    res.status(200).json({
        success: true,
        usersPerDepartment
    });
}

exports.getUserPerCourse = async (req, res, next) => {
    const usersPerCourse = await User.aggregate([
        {
            $group: {
                _id: "$course",
                totalUsers: { $sum: 1 }
            }
        }
    ])
    res.status(200).json({
        success: true,
        usersPerCourse
    })
}

exports.addDownloadedModule = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id)
        const module = await Modules.findById(req.params.id)

        if (!user.downloadedModules.includes(module._id)) {
            user.downloadedModules.push(module._id);
            await user.save();
        }
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

}

exports.getDownloadedModules = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).populate('downloadedModules')
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.addToWatchHistory = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const videoId = req.params.id; // Get the video's ID from req.params
        const videoExists = user.watchHistory.some(video => video.video.toString() === videoId);

        if (videoExists) {
            user.watchHistory = user.watchHistory.map(video =>
                video.video.toString() === videoId ? { video: videoId, date: Date.now() } : video
            );
        } else {
            user.watchHistory.push({ video: videoId, date: Date.now() });
        }
        await user.save();

        res.status(200).json({ success: true, message: 'Video added to watch history' });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.getWatchHistory = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).populate('watchHistory.video');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Filter out videos that don't exist
        user.watchHistory = user.watchHistory.filter(item => item.video != null);
        user.watchHistory.sort((a, b) => new Date(b.watchedAt) - new Date(a.watchedAt));
        res.status(200).json({ watchHistory: user.watchHistory });
    } catch (error) {
        console.log(error.message)
        res.status(400).json({ message: error.message });
    }
};