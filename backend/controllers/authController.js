const User = require('../models/user')
const sendToken = require('../utils/jwToken')
const sendEmail = require('../utils/sendEmail')
const crypto = require('crypto')
const cloudinary = require('cloudinary')


exports.registerUser = async (req, res, next) => {

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
            message: 'Invalid Email or Password'
        })
    }
    const isPasswordMatched = await user.comparePassword(password)

    if (!isPasswordMatched) {
        return res.status(401).json({
            message: 'Invalid Email or Password'
        })
    }

    sendToken(user, 200, res)

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
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(404).json({ error: 'User not found with this email' })
    }
    const resetToken = user.getResetPasswordToken()
    await user.save({ validateBeforeSave: false })
    const resetUrl = `${req.protocol}://localhost:3000/password/reset/${resetToken}`
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
                    crop: "scale"
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

    console.log(req.body)
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

    await User.findByIdAndRemove(req.params.id)
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